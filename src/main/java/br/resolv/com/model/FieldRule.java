package br.resolv.com.model;

public class FieldRule {

	private String idField;
	private String _id;
	private boolean useOtherId;
	
	public boolean isUseOtherId() {
		return useOtherId;
	}
	public void setUseOtherId(boolean useOtherId) {
		this.useOtherId = useOtherId;
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
	
	
	
}
