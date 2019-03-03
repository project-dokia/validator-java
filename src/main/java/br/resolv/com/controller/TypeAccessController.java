package br.resolv.com.controller;

import java.util.ArrayList;

import br.resolv.com.model.Permission;

public class TypeAccessController {


	public ArrayList<Permission> getAllPermissions() {
		ArrayList<Permission> permissions = new ArrayList<Permission>();
		
		permissions.add(new Permission("Type", "TypeComponent", false));
		permissions.add(new Permission("Model", "ModelComponent", false));
		permissions.add(new Permission("Field", "FieldComponent", false));
		permissions.add(new Permission("Rule", "RuleComponent", false));
		permissions.add(new Permission("Admin", "AdminComponent", false));
		
		return permissions;
	}	
	
}
