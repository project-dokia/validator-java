package br.resolv.com.model;

public class Result {

	private boolean result;
	private String idField;
	private String title;
	
	public Result() {
		
	}
	
	
	
	public String getTitle() {
		return title;
	}



	public void setTitle(String title) {
		this.title = title;
	}



	public Result(boolean result, String idField, String title) {
		this.result = result;
		this.idField = idField;
		this.title = title;
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
