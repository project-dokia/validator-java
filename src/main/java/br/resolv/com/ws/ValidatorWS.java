package br.resolv.com.ws;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.cloudant.client.api.Database;
import com.cloudant.client.api.model.FindByIndexOptions;

import br.resolv.com.controller.ValidatorController;
import br.resolv.com.model.Document;
import br.resolv.com.model.LogRequestValidator;
import br.resolv.com.model.Result;
import br.resolv.com.model.ResultRule;
import br.resolv.com.model.Rule;
import br.resolv.com.util.JavaException;
import br.resolv.com.util.MyUtils;

@Path("/validator")
public class ValidatorWS {

	@Context
	HttpServletRequest request;

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response insert(Document document) throws JavaException {
		Database conn = MyUtils.getStoredConnection(request);

		ValidatorController validatorController = new ValidatorController(conn);
		List<Result> result = validatorController.validate(new Document(document.getIdRule(), document.getInputs()));

		int day = new Date().getDay();
		int month = new Date().getMonth();

		int hours = new Date().getHours();
		int minute = new Date().getMinutes();

		conn.save(new LogRequestValidator(document, result,
				(hours < 10 ? "0" + hours : hours) + ":" + (minute < 10 ? "0" + minute : minute),
				(day < 10 ? "0" + day : day) + "/" + (month < 10 ? "0" + month : month), "OK"));

		@SuppressWarnings("deprecation")
		List<Rule> list = conn.findByIndex("{\"_id\": \"" + document.getIdRule() + "\"}", Rule.class,
				new FindByIndexOptions());

		Rule rule = list.get(0);

		double count = 0;
		double countTrue = 0;
		double resultCount = 0;

		double countImportant = 0;
		double countTrueImportant = 0;
		double resultCountImportant = 0;

		for (Result resultFields : result) {
			if (resultFields.isResult() == true) {
				countTrue++;

				if (resultFields.isImportant()) {
					countTrueImportant++;
				}

			}

			if (!resultFields.getDescriptionType().equals("Nenhum")) {
				count++;

				if (resultFields.isImportant()) {
					countImportant++;
				}

			}
		}

		if (count > 0 && countTrue > 0) {
			resultCount = (countTrue / count) * 100;
		}

		if (countImportant > 0 && countTrueImportant > 0) {
			resultCountImportant = (countTrueImportant / countImportant) * 100;
		}

		boolean resultDokia = false;
		if (resultCount >= Double.parseDouble(rule.getAcceptancePercentage())) {
			if (resultCountImportant >= Double.parseDouble(rule.getImportantAcceptancePercentage()) || countImportant == 0) {
				resultDokia = true;
			}
		}

		ResultRule resultRule = new ResultRule();
		resultRule.setResult(result);
		resultRule.setResultDokia(resultDokia);
		resultRule.setResultPercentageImportant((int) resultCountImportant);
		resultRule.setImportantAcceptancePercentage(Integer.parseInt(rule.getImportantAcceptancePercentage()));
		resultRule.setResultPercentage((int) resultCount);
		resultRule.setAcceptancePercentage(Integer.parseInt(rule.getAcceptancePercentage()));
		

		return Response.status(200).entity(resultRule).build();
	}
}
