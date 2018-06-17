package br.resolv.com.ws;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.cloudant.client.api.Database;

import br.resolv.com.controller.TypeController;
import br.resolv.com.factory.CloudantFactory;
import br.resolv.com.model.Type;
import br.resolv.com.util.JavaException;
import br.resolv.com.util.MyUtils;

@Path("/type")
public class TypeWS {

	@Context HttpServletRequest request;
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response insert(Type type) throws JavaException {
		Database conn = MyUtils.getStoredConnection(request);
		CloudantFactory cloudantFactory = new CloudantFactory();
		String _id = cloudantFactory.insert(type, conn);

		return Response.status(200).entity("{\"_id\": \"" +  _id + "\"}").build();
	}	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAll() {
		Database conn = MyUtils.getStoredConnection(request);
	
		TypeController typeController = new TypeController();
		List<Type> types = typeController.getAllTypes(conn);
		
		return Response.status(200).entity(types).build(); 
	}
}
