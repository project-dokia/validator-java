package br.resolv.com.controller;

import java.util.ArrayList;
import java.util.List;

import com.cloudant.client.api.Database;

import br.resolv.com.model.Document;
import br.resolv.com.model.Field;
import br.resolv.com.model.Model;
import br.resolv.com.model.Result;
import br.resolv.com.model.ResultValidator;
import br.resolv.com.model.Rule;
import br.resolv.com.model.Type;

public class ValidatorController {

	Database conn;

	public ValidatorController(Database conn) {
		this.conn = conn;
	}

	public ValidatorController() {
		this.conn = null;
	}

	private void sleep() {
		try {
			Thread.sleep(300);
		} catch (InterruptedException ex) {
		}
	}

	public List<Result> validate(Document document) {
		RuleController ruleController = new RuleController();
		Rule rule = ruleController.getRuleById(document.getIdRule(), conn);

		TypeController typeController = new TypeController();
		List<Type> types = typeController.getAllTypes(this.conn);

		ModelController modelController = new ModelController();
		List<Model> models = modelController.getAllModels(this.conn);

		sleep();

		FieldController fieldController = new FieldController();
		List<Field> fields = fieldController.setValuesFields(document.getInputs(), rule.getFields());

		List<Field> fieldsRule = new ArrayList<Field>();
		for (Field field : rule.getFields()) {
			for (Field fieldOriginal : fields) {
				if (field.get_id().equals(fieldOriginal.get_id())) {
//					if (field.getValue() != null) {
//						if (!field.getValue().equals("")) {
							fieldsRule.add(field);
//						}
//					}
				}
			}
		}

		List<ResultValidator> results = new ArrayList<ResultValidator>();
		results = fieldController.documentVersusRule(fieldsRule, types);

		ArrayList<Result> resultsValidator = new ArrayList<Result>();

		for (ResultValidator result : results) {

			if (result.getDescriptionType() != null) {
				if (!result.getDescriptionType().toUpperCase().equals("nenhum".toUpperCase())) {
					if (result.getDescriptionType().toString().toUpperCase().equals("equals".toUpperCase()) || result
							.getDescriptionType().toString().toUpperCase().equals("Menor Igual (data)".toUpperCase())) {
						String fieldOther = "";
						String valueOther = "";

						for (ResultValidator resultOther : results) {
							if (result.getIdOther() != null) {
								if (resultOther.getIdField() != null) {
									if (resultOther.getIdField().toString().equals(result.getIdOther().toString())) {
										fieldOther = resultOther.getTitleValidator();
										if (resultOther.getValue() != null) {
											valueOther = resultOther.getValue().toString();
										}
									}
								}
							}
						}

						String modelDescription = "";

						for (Model model : models) {
							if (model.get_id().equals(result.getIdModel())) {
								modelDescription = model.getDescription();
							}
						}

						if (result.getValue() != null) {
							resultsValidator.add(new Result(result.getIdField(), result.isResult(),
									result.getTitleValidator(), result.getValue().toString(),
									result.getDescriptionType(), fieldOther, valueOther, modelDescription, true,
									result.getPercentage(), result.getPercentageResult()));
						} else {

							// CONDICAO ADICIONADA PARA RETORNAR TODOS OS RESULTADOS (MESMO QUE FALSE)

							result.setValue("");
							result.setResult(false);

							resultsValidator.add(new Result(result.getIdField(), result.isResult(),
									result.getTitleValidator(), result.getValue().toString(),
									result.getDescriptionType(), fieldOther, valueOther, modelDescription, false,
									result.getPercentage(), result.getPercentageResult()));
						}

					} else {
						String fieldOther = "";
						String valueOther = "";
						for (ResultValidator resultOther : results) {
							if (result.getIdOther() != null) {
								if (resultOther.getIdField() != null) {
									if (resultOther.getIdField().toString().equals(result.getIdOther().toString())) {
										fieldOther = resultOther.getTitleValidator();
										if (resultOther.getValue() != null) {
											valueOther = resultOther.getValue().toString();
										}
									}
								}
							}
						}

						if (result.getValue() != null) {

							String modelDescription = "";

							for (Model model : models) {
								if (model.get_id().equals(result.getIdModel())) {
									modelDescription = model.getDescription();
								}
							}

							resultsValidator.add(new Result(result.getIdField(), result.isResult(),
									result.getTitleValidator(), result.getValue().toString(),
									result.getDescriptionType(), fieldOther, valueOther, modelDescription, true,
									result.getPercentage(), result.getPercentageResult()));

						} else {

							String modelDescription = "";

							for (Model model : models) {
								if (model.get_id().equals(result.getIdModel())) {
									modelDescription = model.getDescription();
								}
							}

							if (result.getValue() == null)
								result.setValue("");

							result.setResult(false);

							resultsValidator.add(new Result(result.getIdField(), result.isResult(),
									result.getTitleValidator(), result.getValue().toString(),
									result.getDescriptionType(), fieldOther, valueOther, modelDescription, false,
									result.getPercentage(), result.getPercentageResult()));
						}
					}
				} else {

					// CONDICAO ADICIONADA PARA RETORNAR TODOS OS RESULTADOS (MESMO QUE FALSE)

					String modelDescription = "";

					for (Model model : models) {
						if (model.get_id().equals(result.getIdModel())) {
							modelDescription = model.getDescription();
						}
					}

					if (result.getValue() == null)
						result.setValue("");

					result.setResult(false);

					resultsValidator.add(new Result(result.getIdField(), result.isResult(), result.getTitleValidator(),
							result.getValue().toString(), result.getDescriptionType(), "", "", modelDescription, false,
							result.getPercentage(), result.getPercentageResult()));
				}
			}
		}
		
		ArrayList<Result> resultSelectedValidator = new ArrayList<Result>();
		
		for(Result result : resultsValidator) {
				boolean contains = false;
				for(Result resultSelected : resultSelectedValidator) {
					if(result.getTitle().equals(resultSelected.getTitle())) {
						if(result.getDescriptionType().equals(resultSelected.getDescriptionType())) {
							if(result.getTitleOther().equals(resultSelected.getTitleOther())) {
								if(result.getValue().equals(resultSelected.getValue())) {
									contains = true;
								}	
							}
						}
					}
				}
				
				if(contains == false) {
					resultSelectedValidator.add(result);
				}
						
		}
		
		return resultSelectedValidator;
	}
}
