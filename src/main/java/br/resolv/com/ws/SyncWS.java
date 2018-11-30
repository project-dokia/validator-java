package br.resolv.com.ws;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.cloudant.client.api.Database;

import br.resolv.com.controller.SyncController;
import br.resolv.com.util.MyUtils;

@Path("/sync")
public class SyncWS {

	@Context
	HttpServletRequest request;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response sync() {
		Database conn = MyUtils.getStoredConnection(request);

		SyncController syncController = new SyncController(conn);
		syncController.syncDatabase();
		
		return Response.status(200).entity("{\"response\": \"ok\"}").build();

	}
	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/lastSync")
	public Response getLastSync() {
		Database conn = MyUtils.getStoredConnection(request);
		SyncController syncController = new SyncController(conn);
		String lastSync = syncController.getLastSync();
		
		return Response.status(200).entity("{\"lastSync\": \"" + lastSync + "\"}").build();

	}
}