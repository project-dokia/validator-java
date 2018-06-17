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
				if (validatorEquals.get_id().equals(field.getOtherId())) {
					if (validatorEquals.getValue().equals(field.getValue())) {
						result = true;
					} else {
						result = false;
					}
				}
			}
		}
		return result;
	}

	public List<ResultValidator> documentVersusRule(List<Field> fields, List<Type> types) {
		List<ResultValidator> results = new ArrayList<ResultValidator>();

		for (Field validator : fields) {
			for (Type type : types) {

				if (validator.getIdType() != null && type.get_id() != null) {
					boolean result = false;

					if (validator.getIdType().equals(type.get_id())) {
						if (type.getCommand().equals("equals")) {
							result = this.equals(validator, fields);
						} else if (type.getCommand().equals("number")) {
							if (validator.getValue().getClass().toString().equals("class java.lang.Integer")) {
								result = true;
							} else {
								result = false;
							}
						} else if (type.getCommand().equals("text")) {
							if (validator.getValue().getClass().toString().equals("class java.lang.String")) {
								result = true;
							} else {
								result = false;
							}

						} else if (type.getCommand().equals("nenhum")) {
							result = true;
						}

						results.add(new ResultValidator(validator.get_id(), validator.getValue(), result,
								validator.getTitle(), type.getDescription()));
					}
				}
			}
		}

		return results;
	}
}
