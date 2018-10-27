package br.resolv.com.controller;

import static com.cloudant.client.api.query.Expression.eq;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.cloudant.client.api.Database;
import com.cloudant.client.api.model.FindByIndexOptions;
import com.cloudant.client.api.query.QueryBuilder;
import com.cloudant.client.api.query.Selector;
import com.cloudant.client.api.views.Key;
import com.cloudant.client.api.views.ViewResponse;
import com.cloudant.client.api.views.ViewResponse.Row;

import br.resolv.com.factory.CloudantFactory;
import br.resolv.com.model.Field;
import br.resolv.com.model.FieldRule;
import br.resolv.com.model.Rule;

public class RuleController {

	public Rule getRuleById(String _id, Database conn) {
		Selector operationSelector = eq("_id", _id);
		List<Rule> rules = conn.query(new QueryBuilder(operationSelector).build(), Rule.class).getDocs();

		return rules.get(0);
	}

	public boolean updatePercentage(String idRule, String importantAcceptancePercentage, String acceptancePercentage,
			Database conn) {
		List<Rule> list = conn.findByIndex("{\"_id\": \"" + idRule + "\"}", Rule.class, new FindByIndexOptions());

		Rule rule = new Rule();
		if (list != null) {
			try {
				rule = list.get(0);

				rule.setAcceptancePercentage(acceptancePercentage);
				rule.setImportantAcceptancePercentage(importantAcceptancePercentage);

				conn.update(rule);

				return true;
			} catch (Exception e) {
				return false;
			}
		} else {
			return false;
		}

	}

	public List<Rule> getRules(Database conn) {
		ViewResponse<String, Rule> result = null;
		try {
			result = conn.getViewRequestBuilder("rule", "rule-view").newRequest(Key.Type.STRING, Rule.class).limit(5000)
					.includeDocs(true).build().getResponse();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		List<Rule> rules = new ArrayList<Rule>();
		if (result != null) {
			if (result.getRows() != null) {
				for (Row<String, Rule> rule : result.getRows()) {
					rules.add(rule.getValue());
				}
			}
		}

		return rules;
	}

	public boolean removeFieldFromRule(FieldRule fieldRule, Database conn) {
		Rule rule = getRuleById(fieldRule.get_id(), conn);

		ArrayList<Field> fields = new ArrayList<Field>();

		for (Field field : rule.getFields()) {
			if (!field.get_id().equals(fieldRule.getIdField())) {
				fields.add(field);
			}
		}

		rule.setFields(fields);

		CloudantFactory cloudantFactory = new CloudantFactory();
		cloudantFactory.update(rule, conn);

		return true;
	}

	public boolean addFieldFromRule(FieldRule fieldRule, Database conn) {
		Rule rule = getRuleById(fieldRule.get_id(), conn);

		List<Field> list = conn.findByIndex("{\"_id\": \"" + fieldRule.getIdField() + "\"}", Field.class,
				new FindByIndexOptions());

		Field field = list != null ? list.get(0) : null;

		List<Field> fields = new ArrayList<Field>();

		fields = rule.getFields();
		if (field != null) {
			if (fieldRule.isUseOtherId()) {
				field.setIdType("fecde76de43641609a7da3a6a2014642");
				field.setNeedOtherId(false);
				field.setOtherId("");
				field.setPercentage(0);
			}

			fields.add(field);
		}

		rule.setFields(fields);

		CloudantFactory cloudantFactory = new CloudantFactory();
		cloudantFactory.update(rule, conn);

		return true;
	}
}
