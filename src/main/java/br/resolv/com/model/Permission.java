package br.resolv.com.model;

public class Permission {

	private String title;
	private String description;
	private boolean enable;
	
	
	public Permission(String title, String description, boolean enable) {
		this.title = title;
		this.enable = enable;
		this.description = description;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isEnable() {
		return enable;
	}
	public void setEnable(boolean enable) {
		this.enable = enable;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
}
