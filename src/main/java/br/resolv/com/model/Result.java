package br.resolv.com.model;

public class Result {

	private boolean result;
	private String idField;
	
	public Result() {
		
	}
	
	public Result(boolean result, String idField) {
		this.result = result;
		this.idField = idField;
	}
	
	public boolean isResult() {
		return result;
	}
	public void setResult(boolean result) {
		this.result = result;
	}
	public String getIdField() {
		return idField;
	}
	public void setIdField(String idField) {
		this.idField = idField;
	}
	
	
	
}
