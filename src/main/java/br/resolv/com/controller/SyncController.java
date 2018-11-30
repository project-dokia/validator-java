package br.resolv.com.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.cloudant.client.api.Database;

import br.resolv.com.model.Field;
import br.resolv.com.model.Model;
import br.resolv.com.model.Rule;
import br.resolv.com.model.Type;
import br.resolv.com.util.Constant;

public class SyncController {
	private Database conn;
	
	public SyncController(Database conn) {
		this.conn = conn;
	}
	
	public Rule ruleById(String _id) {
		for(Rule rule : Constant.rules) {
			if(rule.get_id().equals(_id)) {
				return rule;
			}
		}
		
		return null;
	}
	
	public Type typeById(String _id) {
		for(Type type : Constant.types) {
			if(type.get_id().equals(_id)) {
				return type;
			}
		}
		
		return null;
	}
	
	public Model modelById(String _id) {
		for(Model model : Constant.models) {
			if(model.get_id().equals(_id)) {
				return model;
			}
		}
		
		return null;
	}
	
	public Field fieldById(String _id) {
		for(Field field : Constant.fields) {
			if(field.get_id().equals(_id)) {
				return field;
			}
		}
		
		return null;
	}
	
	public List<Type> getTypes() {
		return Constant.types;
	}
	
	public List<Field> getFields() {
		return Constant.fields;
	}
	
	public List<Model> getModels() {
		return Constant.models;
	}
	
	public List<Rule> getRules() {
		return Constant.rules;
	}
		
	public String getLastSync() {
		return Constant.lastSync;
	}
	
	public void syncDatabase() {
		RuleController ruleController = new RuleController();
		FieldController fieldController = new FieldController();
		TypeController typeController = new TypeController();
		ModelController modelController = new ModelController();
		
		List<Rule> rules =  ruleController.getAllDocument(conn);
		List<Type> types =  typeController.getAllTypes(conn);
		List<Model> models =  modelController.getAllModels(conn);
		List<Field> fields =  fieldController.getAllDocument(conn);
		
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Date date = new Date();
		
		Constant.lastSync = "" + dateFormat.format(date);
		Constant.rules = rules;
		Constant.types = types;
		Constant.models = models;
		Constant.fields = fields;
	}
}
