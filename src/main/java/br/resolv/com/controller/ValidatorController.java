package br.resolv.com.controller;

import java.util.ArrayList;
import java.util.List;

import com.cloudant.client.api.Database;

import br.resolv.com.model.Document;
import br.resolv.com.model.Field;
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
	
	public List<Result> validate(Document document) {
		RuleController ruleController = new RuleController();
		Rule rule = ruleController.getRuleById(document.getIdRule(), conn);

		TypeController typeController = new TypeController();
		List<Type> types = typeController.getAllTypes(this.conn);

		FieldController fieldController = new FieldController();
		List<Field> fields = fieldController.setValuesFields(document.getInputs(),
				rule.getFields());

		List<ResultValidator> results = new ArrayList<ResultValidator>();
		results = fieldController.documentVersusRule(fields, types);

		ArrayList<Result> resultsValidator = new ArrayList<Result>();
		
		for (ResultValidator result : results) {
			resultsValidator.add(new Result(result.isResult(), result.getIdField(), result.getTitleValidator()));
//			System.out.println("\nResult: " + result.isResult());
//			System.out.println("Value: " + result.getValue());
//			System.out.println("Title Validator: " + result.getTitleValidator());
//			System.out.println("Description Type: " + result.getDescriptionType());
//			System.out.println("\n");
		}
		
		return resultsValidator;
	}
}
