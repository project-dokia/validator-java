package br.resolv.com.model;

public class ResultVerifyRule {

	private boolean result;
	private double percentage;
	public boolean isResult() {
		return result;
	}
	
	public ResultVerifyRule() {
		
	}
	
	public ResultVerifyRule(boolean result, double percentage) {
		this.result = result;
		this.percentage = percentage;
	}
	
	public void setResult(boolean result) {
		this.result = result;
	}
	public double getPercentage() {
		return percentage;
	}
	public void setPercentage(double percentage) {
		this.percentage = percentage;
	}

}
