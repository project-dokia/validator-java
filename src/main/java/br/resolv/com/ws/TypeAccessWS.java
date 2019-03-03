package br.resolv.com.ws;

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

import br.resolv.com.controller.RuleController;
import br.resolv.com.controller.TypeAccessController;
import br.resolv.com.model.FieldRule;
import br.resolv.com.util.JavaException;
import br.resolv.com.util.MyUtils;

@Path("/type-access")
public class TypeAccessWS {

	@Context
	HttpServletRequest request;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getFieldById(@PathParam("_id") String _id) {
//		Database conn = MyUtils.getStoredConnection(request);
	
		TypeAccessController typeAccessController = new TypeAccessController();
		return Response.status(200).entity(typeAccessController.getAllPermissions()).build();
	}
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/add-field")
	public Response addFieldFromRule(FieldRule fieldRule) throws JavaException {
		Database conn = MyUtils.getStoredConnection(request);
		RuleController ruleController = new RuleController();
		return Response.status(200).entity("{\"result\": \"" + ruleController.addFieldFromRule(fieldRule, conn) + "\"}")
				.build();
	}
	
}
