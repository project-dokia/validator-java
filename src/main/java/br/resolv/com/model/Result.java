package br.resolv.com.model;

public class Result {

	private boolean result;
	private String idField;
	private String title;
	private String descriptionType;
	private String titleOther;
	private String value;
	private String valueOther;
	private String model;
	private boolean exist;
	
	

	// valor1
	// valorDependencia

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public Result() {

	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getTitleOther() {
		return titleOther;
	}

	public void setTitleOther(String titleOther) {
		this.titleOther = titleOther;
	}

	public String getValueOther() {
		return valueOther;
	}

	public void setValueOther(String valueOther) {
		this.valueOther = valueOther;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescriptionType() {
		return descriptionType;
	}

	public void setDescriptionType(String descriptionType) {
		this.descriptionType = descriptionType;
	}

	public Result(String idField, boolean result, String title, String value, String descriptionType, String titleOther,
			String valueOther, String model, boolean exist) {
		this.idField = idField;
		this.result = result;
		this.title = title;
		this.descriptionType = descriptionType;
		this.titleOther = titleOther;
		this.value = value;
		this.valueOther = valueOther;
		this.model = model;
		this.exist = exist;
	}

	
	
	public boolean isExist() {
		return exist;
	}

	public void setExist(boolean exist) {
		this.exist = exist;
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
