package br.resolv.com.util;

import javax.servlet.ServletRequest;

import com.cloudant.client.api.Database;

public class MyUtils {

	public static final String ATT_NAME = "MY_CONNECTION_ATTRIBUTE";
	public static final String ATT_AUTH = "MY_AUTH_ATTRIBUTE";

	// Store Connection to attribute of request
	// Information stored only exists during request
	// until the data is returned to the user browser.
	public static void storeConnection(ServletRequest request, Database conn) {
		request.setAttribute(ATT_NAME, conn);
	}
	
	// Get the Connection object has been stored in one attribute of the request.
	public static Database getStoredConnection(ServletRequest request) {
		Database conn = (Database) request.getAttribute(ATT_NAME);
		return conn;
	}
}
