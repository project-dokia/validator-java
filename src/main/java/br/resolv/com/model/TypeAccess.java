package br.resolv.com.model;

import java.util.ArrayList;

public class TypeAccess {

	private ArrayList<Permission> permissions;
	private String title;

	public ArrayList<Permission> getPermissions() {
		return permissions;
	}
	public void setPermissions(ArrayList<Permission> permissions) {
		this.permissions = permissions;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
}
