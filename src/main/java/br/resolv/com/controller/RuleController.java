package br.resolv.com.controller;

import static com.cloudant.client.api.query.Expression.eq;

import java.util.List;

import com.cloudant.client.api.Database;
import com.cloudant.client.api.query.QueryBuilder;
import com.cloudant.client.api.query.Selector;

import br.resolv.com.model.Rule;

public class RuleController {

	public Rule getRuleById(String _id, Database conn) {
		Selector operationSelector = eq("_id", _id);		
		List<Rule> rules = conn.query(new QueryBuilder(operationSelector).build(), Rule.class).getDocs();

		return rules.get(0);
	}
}
