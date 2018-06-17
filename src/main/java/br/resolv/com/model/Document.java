package br.resolv.com.model;

import java.util.List;

public class  Document {

	private String _id;
	private String _rev;
	private String idRule;
	private List<Input> inputs;
	
	public Document() {
		
	}
	
	public Document(String idRule, List<Input> inputs) {
		this.idRule = idRule;
		this.inputs = inputs;
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

	public String getIdRule() {
		return idRule;
	}

	public void setIdRule(String idRule) {
		this.idRule = idRule;
	}
	 

	public List<Input> getInputs() {
		return inputs;
	}
	public void setInputs(List<Input> inputs) {
		this.inputs = inputs;
	}
}
