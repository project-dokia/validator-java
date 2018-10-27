package br.resolv.com.model;

import java.util.List;

public class ResultRule {

	private List<Result> result;
	private boolean resultDokia;
	private int resultPercentageImportant;
	private int importantAcceptancePercentage;
	private int resultPercentage;
	private int acceptancePercentage;
	
	public List<Result> getResult() {
		return result;
	}
	public void setResult(List<Result> result) {
		this.result = result;
	}
	public boolean isResultDokia() {
		return resultDokia;
	}
	public void setResultDokia(boolean resultDokia) {
		this.resultDokia = resultDokia;
	}
	public int getResultPercentageImportant() {
		return resultPercentageImportant;
	}
	public void setResultPercentageImportant(int resultPercentageImportant) {
		this.resultPercentageImportant = resultPercentageImportant;
	}
	public int getImportantAcceptancePercentage() {
		return importantAcceptancePercentage;
	}
	public void setImportantAcceptancePercentage(int importantAcceptancePercentage) {
		this.importantAcceptancePercentage = importantAcceptancePercentage;
	}
	public int getResultPercentage() {
		return resultPercentage;
	}
	public void setResultPercentage(int resultPercentage) {
		this.resultPercentage = resultPercentage;
	}
	public int getAcceptancePercentage() {
		return acceptancePercentage;
	}
	public void setAcceptancePercentage(int acceptancePercentage) {
		this.acceptancePercentage = acceptancePercentage;
	}	
}
