package br.resolv.com.controller;

import java.util.ArrayList;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Form;
import javax.ws.rs.core.MediaType;

import com.google.gson.Gson;

import br.resolv.com.model.Feedback;

public class FeedbackController {

	public ArrayList<Feedback> getAllFeedbacks() {
		Client client = ClientBuilder.newClient();
		WebTarget target = client.target("https://www.scoresolv.com.br/feedbackdokia");
		
		String result = target.request(MediaType.TEXT_PLAIN).header("Content-type", "application/json")
				.header("Accept", "application/json")
				.get(String.class);

		
		Gson gson = new Gson();
		ArrayList<Feedback> feedbacks = (ArrayList<Feedback>) gson.fromJson(result, Object.class);

		client.close();
		
		return feedbacks;
	}
	
	public ArrayList<Feedback> getAllFeedbacksSolved() {
		Client client = ClientBuilder.newClient();
		WebTarget target = client.target("https://www.scoresolv.com.br/resolvedfeedbackdokia");
		
		String result = target.request(MediaType.TEXT_PLAIN).header("Content-type", "application/json")
				.header("Accept", "application/json")
				.get(String.class);

		
		Gson gson = new Gson();
		ArrayList<Feedback> feedbacks = (ArrayList<Feedback>) gson.fromJson(result, Object.class);

		client.close();
		
		return feedbacks;
	}
	
	public Object updateFeedback(String id) {
		Client client = ClientBuilder.newClient();
		WebTarget target = client.target("https://www.scoresolv.com.br/updateDokiaFeedback.php");
		
		Form form = new Form();
		form.param("id", "" + id);
		form.param("status", "R");
				
		Object response = target.request().header("Content-type", "application/x-www-form-urlencoded")
				.post(Entity.form(form))
				.getEntity();

		
		client.close();
		
		return response;
		
	}

}
