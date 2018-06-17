package br.resolv.com.model;

public class Change {

	private Object old;
	private Object current;
	private String type;
	private String author;
	private String lastModify;
	
	public Object getOld() {
		return old;
	}
	public void setOld(Object old) {
		this.old = old;
	}
	public Object getCurrent() {
		return current;
	}
	public void setCurrent(Object current) {
		this.current = current;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getLastModify() {
		return lastModify;
	}
	public void setLastModify(String lastModify) {
		this.lastModify = lastModify;
	}
	
	
	
	
	
}
