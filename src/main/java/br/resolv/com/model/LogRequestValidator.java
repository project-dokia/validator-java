package br.resolv.com.model;

import java.util.List;

public class LogRequestValidator {

	private Document documentRequest;
	private List<Result> result;
	private String requestTime;
	private String requestDate;
	private String status;
	private String type;

	public LogRequestValidator(Document documentRequest, List<Result> result, String requestTime, String requestDate,
			String status) {
		this.documentRequest = documentRequest;
		this.result = result;
		this.status = status;
		this.type = "LOGREQUESTVALIDATOR";
		this.requestTime = requestTime;
		this.requestDate = requestDate;
	}

	public LogRequestValidator() {
		this.type = "LOGREQUESTVALIDATOR";
	}

	public Document getDocumentRequest() {
		return documentRequest;
	}

	public void setDocumentRequest(Document documentRequest) {
		this.documentRequest = documentRequest;
	}

	public List<Result> getResult() {
		return result;
	}

	public void setResult(List<Result> result) {
		this.result = result;
	}

	public String getRequestTime() {
		return requestTime;
	}

	public void setRequestTime(String requestTime) {
		this.requestTime = requestTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getRequestDate() {
		return requestDate;
	}

	public void setRequestDate(String requestDate) {
		this.requestDate = requestDate;
	}
}
