package br.resolv.com.ws;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.cloudant.client.api.Database;
import com.cloudant.client.api.views.Key;
import com.cloudant.client.api.views.ViewResponse;

import br.resolv.com.controller.RuleController;
import br.resolv.com.factory.CloudantFactory;
import br.resolv.com.model.FieldRule;
import br.resolv.com.model.Rule;
import br.resolv.com.util.JavaException;
import br.resolv.com.util.MyUtils;


@Path("/rule")
public class RuleWS {

	@Context HttpServletRequest request;
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response insert(Object rule) throws JavaException {
		Database conn = MyUtils.getStoredConnection(request);
		CloudantFactory cloudantFactory = new CloudantFactory();
		String _id = cloudantFactory.insert(rule, conn);
		return Response.status(200).entity("{\"_id\": \"" +  _id + "\"}").build();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/remove-field")
	public Response removeFieldFromRule(FieldRule fieldRule) throws JavaException {
		Database conn = MyUtils.getStoredConnection(request);	
		RuleController ruleController = new RuleController();
		return Response.status(200).entity("{\"result\": \"" +  ruleController.removeFieldFromRule(fieldRule, conn) + "\"}").build();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/add-field")
	public Response addFieldFromRule(FieldRule fieldRule) throws JavaException {
		Database conn = MyUtils.getStoredConnection(request);	
		RuleController ruleController = new RuleController();
		return Response.status(200).entity("{\"result\": \"" +  ruleController.addFieldFromRule(fieldRule, conn) + "\"}").build();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{_id}")
	public Response getRuleById(@PathParam("_id") String _id) {
		Database conn = MyUtils.getStoredConnection(request);
		
		RuleController ruleController = new RuleController();
		Rule rule = ruleController.getRuleById(_id, conn);
		
		return Response.status(200).entity(rule).build(); 
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAll() {
		Database conn = MyUtils.getStoredConnection(request);

		List<Rule> rules = new ArrayList<Rule>();
		
		try {
			ViewResponse<String, Rule> response  = conn.getViewRequestBuilder("rule", "rule-view")
			.newRequest(Key.Type.STRING, Rule.class)
			.limit(50)
			.includeDocs(true)
			.build()
			.getResponse();
			
			
			for(Rule rowRule : response.getValues()) {
				rules.add(rowRule);
			}
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return Response.status(200).entity(rules).build(); 
	}
}
