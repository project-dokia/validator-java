package br.resolv.com.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import br.resolv.com.model.Field;
import br.resolv.com.model.Input;
import br.resolv.com.model.ResultValidator;
import br.resolv.com.model.Type;
import br.resolv.com.util.Comparator;

public class FieldController {

	public List<Field> setValuesFields(List<Input> inputs, List<Field> fields) {
		for (Field field : fields) {
			for (Input input : inputs) {
				if (input.getIdField().equals(field.get_id())) {
					field.setValue(input.getValue());
				}
			}
		}
		return fields;
	}

	private boolean verifyRule(Field field, List<Field> validators, String command) {
		boolean result = false;
		if (validators.size() > 0) {
			for (Field validatorEquals : validators) {
				if (field != null) {
					if (validatorEquals.get_id().equals(field.getOtherId())) {
						if (field.getValue() != null && validatorEquals.getValue() != null) {
							if (command.equals("equals")) {
								if (validatorEquals.getValue().equals(field.getValue())) {
									result = true;
								} else {
									result = false;
								}
							} else if (command.equals("menor_igual_data")) {
								return verifyDate(validatorEquals.getValue(), field.getValue());
							}

						}
					}
				}
			}
		}
		return result;
	}

	public boolean verifyDate(Object dateInitial, Object dateFinal) {
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		
		String strDateInitial = dateInitial.toString(); // "28/04/2018";
		String strDateFinal = dateFinal.toString(); // "25/04/2018";
	
		try {
			java.util.Date dtInitial = sdf.parse(strDateInitial);
			java.util.Date dtFinal = sdf.parse(strDateFinal);

			Comparator comparator = new Comparator();
			return comparator.verifyDateInitialMoreDateFinal(dtInitial, dtFinal);
		} catch (ParseException pe) {
			pe.printStackTrace();
		}

		return false;
	}

	public List<ResultValidator> documentVersusRule(List<Field> fields, List<Type> types) {
		List<ResultValidator> results = new ArrayList<ResultValidator>();

		for (Field field : fields) {
			for (Type type : types) {
				if (field.getIdType() != null && type.get_id() != null) {
					boolean result = false;

					if (field.getIdType().equals(type.get_id())) {
						if (type.getCommand().equals("equals")) {
							result = this.verifyRule(field, fields, "equals");
						} else if (type.getCommand().equals("number")) {
							if (field.getValue().getClass().toString().equals("class java.lang.Integer")) {
								result = true;
							} else {
								result = false;
							}
						} else if (type.getCommand().equals("text")) {
							if (field.getValue().getClass().toString().equals("class java.lang.String")) {
								result = true;
							} else {
								result = false;
							}

						} else if (type.getCommand().equals("nenhum")) {
							result = true;
						} else if (type.getCommand().equals("verifica_existencia")) {
							if (field.getValue() != null) {
								result = true;
							} else {
								result = false;
							}
						} else if (type.getCommand().equals("menor_igual_data")) {
							result = verifyRule(field, fields, "menor_igual_data");
						}

						results.add(new ResultValidator(field.get_id(), field.getValue(), result, field.getTitle(), type.getDescription(), field.isDependency(), field.getIdDependency(), field.getIdModel(), field.getOtherId()));
					}
				}
			}
		}

//		for (ResultValidator resultValidator : results) {
//			if (resultValidator.isDependency() == true) {
//				for (ResultValidator resultValidatorDependency : results) {
//					if (resultValidatorDependency.getIdField().equals(resultValidator.getIdField())) {
//						if (resultValidatorDependency.isResult() == true && resultValidator.isResult() == true) {
//							resultValidator.setResult(true);
//						} else {
//							resultValidator.setResult(false);
//						}
//					}
//				}
//			}
//		}

		return results;
	}

}
