package br.resolv.com.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.cloudant.client.api.Database;
import com.cloudant.client.api.views.Key;
import com.cloudant.client.api.views.ViewResponse;

import br.resolv.com.model.Type;

public class TypeController {

	public List<Type> getAllTypes(Database conn) {
		List<Type> types = new ArrayList<Type>();
		
		try {
			ViewResponse<String, Type> response  = conn.getViewRequestBuilder("type", "type-view")
			.newRequest(Key.Type.STRING, Type.class)
			.limit(50)
			.includeDocs(true)
			.build()
			.getResponse();
			
			for(Type rowType : response.getValues()) {
				types.add(rowType);
			}
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
		return types;
	}
	
}
