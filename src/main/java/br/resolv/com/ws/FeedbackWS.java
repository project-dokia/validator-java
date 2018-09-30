package br.resolv.com.ws;

import java.util.ArrayList;

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

import br.resolv.com.controller.FeedbackController;
import br.resolv.com.model.Feedback;
import br.resolv.com.util.JavaException;

@Path("/feedback")
public class FeedbackWS {

	@Context HttpServletRequest request;
	private FeedbackController feedbackController;
	
	public FeedbackWS() {
		this.feedbackController = new FeedbackController();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{id}")
	public Response insert(@PathParam("id") String id) throws JavaException {
		return Response.status(200).entity(this.feedbackController.updateFeedback(id)).build();
	}	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAll() {
		ArrayList<Feedback> feedbacks = this.feedbackController.getAllFeedbacks();
		return Response.status(200).entity(feedbacks).build(); 
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/solved")
	public Response getAllSolveds() {
		ArrayList<Feedback> feedbacks = this.feedbackController.getAllFeedbacksSolved();
		return Response.status(200).entity(feedbacks).build(); 
	}
}
