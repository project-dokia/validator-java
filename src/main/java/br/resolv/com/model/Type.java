package br.resolv.com.model;

public class Type {

	private String _id;
	private String _rev;
	private String description;
	private String command;
	private String type;
	
	public Type(String _id, String description, String command) {
		this._id = _id;
		this.description = description;
		this.command = command;
	}
	
	public Type(String description, String command) {
		this.description = description;
		this.command = command;
	}
	
	public Type() {
		this.type = "TYPE";
	}
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String get_rev() {
		return _rev;
	}
	public void set_rev(String _rev) {
		this._rev = _rev;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCommand() {
		return command;
	}
	public void setCommand(String command) {
		this.command = command;
	}
	
}
