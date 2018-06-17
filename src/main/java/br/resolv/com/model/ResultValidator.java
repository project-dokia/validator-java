package br.resolv.com.model;

public class ResultValidator {

	private String _id;
	private String _rev;
	private Object value;
	private boolean result;
	private String titleValidator;
	private String descriptionType;
	private String idField;
	
	public ResultValidator(String idField, Object value, boolean result, String titleValidator, String descriptionType) {
		this.idField = idField;
		this.value = value;
		this.result = result;
		this.titleValidator = titleValidator;
		this.descriptionType = descriptionType;
	}
	
	
	public String getIdField() {
		return idField;
	}


	public void setIdField(String idField) {
		this.idField = idField;
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
	public Object getValue() {
		return value;
	}
	public void setValue(Object value) {
		this.value = value;
	}
	public boolean isResult() {
		return result;
	}
	public void setResult(boolean result) {
		this.result = result;
	}
	public String getTitleValidator() {
		return titleValidator;
	}
	public void setTitleValidator(String titleValidator) {
		this.titleValidator = titleValidator;
	}
	public String getDescriptionType() {
		return descriptionType;
	}
	public void setDescriptionType(String descriptionType) {
		this.descriptionType = descriptionType;
	}
	
	
	
}
