package br.resolv.com.filter;

import java.io.IOException;
import java.util.Date;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

import com.cloudant.client.api.Database;

import br.resolv.com.util.CloudantClientMgr;
import br.resolv.com.util.MyUtils;

/**
 * Servlet Filter implementation class RedirectFilter
 */
@WebFilter("/*")
public class ConnFilter implements Filter {

	/**
	 * Default constructor.
	 */
	public ConnFilter() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		// place your code here
		System.out.println("ConnFilter...");

		HttpServletRequest req = (HttpServletRequest) request;

		String servletPath = req.getServletPath();

		System.out.println("ConnFilter #INFO " + new Date() + " - ServletPath :" + servletPath //
				+ ", URL =" + req.getRequestURL());

		Database conn = null;
		try {
			conn = CloudantClientMgr.getDB();
			MyUtils.storeConnection(request, conn);
			MyUtils.storeConnection(request, conn);
		} catch (Exception e) {
			e.printStackTrace();
			// TODO Retornar erro na aplicacao
		} finally {
			if (conn != null) {
				// conn.close();
				conn = null;
			}
		}

		
		// pass the request along the filter chain
		chain.doFilter(request, response);

		System.out.println("ConnFilter ended!!!");

	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
