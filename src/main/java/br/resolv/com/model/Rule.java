package br.resolv.com.model;

import java.util.List;

public class Rule {

	private String _id;
	private String _rev;
	private List<Field> fields;
	private String type;
	private String description;
	private String acceptancePercentage;
	private String importantAcceptancePercentage;

	public Rule(String _id, List<Field> fields) {
		this._id = _id;
		this.fields = fields;
		this.type = "RULE";
	}

	public Rule(String _id, List<Field> fields, String description) {
		this._id = _id;
		this.fields = fields;
		this.description = description;
		this.type = "RULE";
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Rule(List<Field> fields) {
		this.fields = fields;
		this.type = "RULE";
	}

	public Rule() {
		this.type = "RULE";
	}

	public List<Field> getFields() {
		return fields;
	}

	public void setFields(List<Field> fields) {
		this.fields = fields;
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

	public String getId() {
		return _id;
	}

	public void setId(String _id) {
		this._id = _id;
	}

	public String getAcceptancePercentage() {
		return acceptancePercentage;
	}

	public void setAcceptancePercentage(String acceptancePercentage) {
		this.acceptancePercentage = acceptancePercentage;
	}

	public String getImportantAcceptancePercentage() {
		return importantAcceptancePercentage;
	}

	public void setImportantAcceptancePercentage(String importantAcceptancePercentage) {
		this.importantAcceptancePercentage = importantAcceptancePercentage;
	}
}
