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

import br.resolv.com.controller.TypeAccessController;
import br.resolv.com.factory.CloudantFactory;
import br.resolv.com.model.Model;
import br.resolv.com.model.TypeAccess;
import br.resolv.com.util.JavaException;
import br.resolv.com.util.MyUtils;

@Path("/type-access")
public class TypeAccessWS {

	@Context
	HttpServletRequest request;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/all-permissions")
	public Response getFieldById(@PathParam("_id") String _id) {
	
		TypeAccessController typeAccessController = new TypeAccessController();
		return Response.status(200).entity(typeAccessController.getAllPermissions()).build();
	}
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response insert(TypeAccess typeAccess) throws JavaException {
		Database conn = MyUtils.getStoredConnection(request);
		CloudantFactory cloudantFactory = new CloudantFactory();
		String _id = cloudantFactory.insert(typeAccess, conn);

		return Response.status(200).entity("{\"_id\": \"" +  _id + "\"}").build();
	}	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAll() {
		Database conn = MyUtils.getStoredConnection(request);
	
		List<TypeAccess> typesAccess = new ArrayList<TypeAccess>();
		
		try {
			ViewResponse<String, TypeAccess> response  = conn.getViewRequestBuilder("type-access", "type-access-view")
			.newRequest(Key.Type.STRING, TypeAccess.class)
			.limit(50)
			.includeDocs(true)
			.build()
			.getResponse();
			
			
			for(TypeAccess rowModel : response.getValues()) {
				typesAccess.add(rowModel);
			}
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return Response.status(200).entity(typesAccess).build(); 
	}
	
}
