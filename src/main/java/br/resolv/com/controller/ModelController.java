package br.resolv.com.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.cloudant.client.api.Database;
import com.cloudant.client.api.views.Key;
import com.cloudant.client.api.views.ViewResponse;

import br.resolv.com.model.Model;

public class ModelController {

	public List<Model> getAllModels(Database conn) {
		List<Model> models = new ArrayList<Model>();

		try {
			ViewResponse<String, Model> response = conn.getViewRequestBuilder("model", "model-view")
					.newRequest(Key.Type.STRING, Model.class).limit(50).includeDocs(true).build().getResponse();

			for (Model rowModel : response.getValues()) {
				models.add(rowModel);
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return models;
	}

}
