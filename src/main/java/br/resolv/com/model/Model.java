package br.resolv.com.model;

public class Model {
	private String _id;
	private String _rev;
	private String description;
	private String type;

	public Model(String _id, String _rev, String description) {
		this._id = _id;
		this._rev = _rev;
		this.description = description;
		this.type = "MODEL";
	}

	public Model() {
		this.type = "MODEL";
	}

	public Model(String description) {
		this.type = "MODEL";
		this.description = description;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
