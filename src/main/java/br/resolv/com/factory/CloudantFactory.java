package br.resolv.com.factory;

import com.cloudant.client.api.Database;

public class CloudantFactory {
	
	public String insert(Object object, Database conn) {
		com.cloudant.client.api.model.Response resp = conn.save(object);
		return resp.getId();
	}

}
