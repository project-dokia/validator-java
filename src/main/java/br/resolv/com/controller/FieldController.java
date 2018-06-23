package br.resolv.com.controller;

import java.util.ArrayList;
import java.util.List;

import br.resolv.com.model.Field;
import br.resolv.com.model.Input;
import br.resolv.com.model.ResultValidator;
import br.resolv.com.model.Type;

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

	private boolean equals(Field field, List<Field> validators) {
		boolean result = false;
		if (validators.size() > 0) {
			for (Field validatorEquals : validators) {
				if (field != null) {
//					System.out.println(field.getOtherId());
//					System.out.println(validatorEquals.get_id());
					if (validatorEquals.get_id().equals(field.getOtherId())) {
						if (field.getValue() != null && validatorEquals.getValue() != null) {
							if (validatorEquals.getValue().equals(field.getValue())) {
								result = true;
							} else {
								result = false;
							}
						}
					}
				}
			}
		}
		return result;
	}

	public List<ResultValidator> documentVersusRule(List<Field> fields, List<Type> types) {
		List<ResultValidator> results = new ArrayList<ResultValidator>();

		for (Field field : fields) {
			for (Type type : types) {

				if (field.getIdType() != null && type.get_id() != null) {
					boolean result = false;

					if (field.getIdType().equals(type.get_id())) {
						if (type.getCommand().equals("equals")) {
							result = this.equals(field, fields);
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
						} else if (type.getCommand().equals("menor_igual_data")) {
							result = true;
						} else if (type.getCommand().equals("verifica_existencia")) {
							result = true;
						} 
						
						

						// CADASTRAR MENOR IGUAL DATA - menor_igual_data
						// verifica_existencia
//						System.out.println(validator.isDependency());
						
						results.add(new ResultValidator(field.get_id(), field.getValue(), result,
								field.getTitle(), type.getDescription(), field.isDependency(), field.getIdDependency()));
					}
				}
			}
		}
		
		for(ResultValidator resultValidator : results) {
			if(resultValidator.isDependency() == true) {
				for(ResultValidator resultValidatorDependency : results) {
					if(resultValidatorDependency.getIdField().equals(resultValidator.getIdField())) {
						if(resultValidatorDependency.isResult() == true && resultValidator.isResult() == true) {
							resultValidator.setResult(true);
						} else {
							resultValidator.setResult(false);
						}
					}
				}
			}
		}

		return results;
	}
	
	
	
}
