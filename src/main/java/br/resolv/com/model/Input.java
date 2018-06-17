package br.resolv.com.model;

public class Input {

	private String _id;
	private String _rev;
	private Object value;
	private String idField;

	public Input() {
		
	}
	
	public Input(String _id, String _rev, Object value, String idField) {
		this._id = _id;
		this.value = value;
		this._rev = _rev;
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

	public String getIdField() {
		return idField;
	}

	public void setIdField(String idField) {
		this.idField = idField;
	}

}
