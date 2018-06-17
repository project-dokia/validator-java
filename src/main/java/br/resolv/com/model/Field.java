package br.resolv.com.model;

public class Field {

	private String _id;
	private String _rev;
	private String idType;
	private String title;
	private Object value;
	private boolean needOtherId;
	private String otherId;
	private String type;
	private String idModel;

	public Field(String _id, String title, String idModel) {
		this.type = "FIELD";
		this._id = _id;
		this.title = title;
		this.idModel = idModel;
	}

	public Field(String _id, String idType, String title, String idModel) {
		this.type = "FIELD";
		this._id = _id;
		this.idType = idType;
		this.title = title;
		this.idModel = idModel;
	}

	public Field(String _id, String idType, String title, boolean needOtherId, String otherId, String idModel) {
		this.type = "FIELD";
		this._id = _id;
		this.idType = idType;
		this.title = title;
		this.needOtherId = needOtherId;
		this.otherId = otherId;
		this.idModel = idModel;
	}

	public Field(String idType, String title, boolean needOtherId, String idModel) {
		this.type = "FIELD";
		this.idType = idType;
		this.title = title;
		this.needOtherId = needOtherId;
		this.idModel = idModel;
	}

	public Field(String idType, String title, boolean needOtherId, String otherId, String idModel) {
		this.type = "FIELD";
		this.idType = idType;
		this.title = title;
		this.needOtherId = needOtherId;
		this.otherId = otherId;
		this.idModel = idModel;
	}

	public String getIdModel() {
		return idModel;
	}

	public void setIdModel(String idModel) {
		this.idModel = idModel;
	}

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String get_rev() {
		return _rev;
	}

	public void set_rev(String _rev) {
		this._rev = _rev;
	}

	public String getIdType() {
		return idType;
	}

	public void setIdType(String idType) {
		this.idType = idType;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Object getValue() {
		return value;
	}

	public void setValue(Object value) {
		this.value = value;
	}

	public boolean isNeedOtherId() {
		return needOtherId;
	}

	public void setNeedOtherId(boolean needOtherId) {
		this.needOtherId = needOtherId;
	}

	public String getOtherId() {
		return otherId;
	}

	public void setOtherId(String otherId) {
		this.otherId = otherId;
	}
}
