package br.resolv.com.model;

public class Feedback {

	private String id;
	private String feedback;
	private String commentario_correto;
	private String comentario_errado;
	private String erro_id;
	private String erro_descricao;
	private String feedback_status;
	private String dt_consulta;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	public String getCommentario_correto() {
		return commentario_correto;
	}
	public void setCommentario_correto(String commentario_correto) {
		this.commentario_correto = commentario_correto;
	}
	public String getComentario_errado() {
		return comentario_errado;
	}
	public void setComentario_errado(String comentario_errado) {
		this.comentario_errado = comentario_errado;
	}
	public String getErro_id() {
		return erro_id;
	}
	public void setErro_id(String erro_id) {
		this.erro_id = erro_id;
	}
	public String getErro_descricao() {
		return erro_descricao;
	}
	public void setErro_descricao(String erro_descricao) {
		this.erro_descricao = erro_descricao;
	}
	public String getFeedback_status() {
		return feedback_status;
	}
	public void setFeedback_status(String feedback_status) {
		this.feedback_status = feedback_status;
	}
	public String getDt_consulta() {
		return dt_consulta;
	}
	public void setDt_consulta(String dt_consulta) {
		this.dt_consulta = dt_consulta;
	}
}
