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
import javax.ws.rs.core.Context;

/**
 * Servlet Filter implementation class RedirectFilter
 */
@WebFilter("/*")
public class RedirectFilter implements Filter {

    /**
     * Default constructor. 
     */
    public RedirectFilter() {
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
	
	@Context HttpServletRequest request;

	
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {		
		// TODO Auto-generated method stub
		// place your code here
		System.out.println("RedirectFilter...");
		
		HttpServletRequest req = (HttpServletRequest) request;
		 
        String servletPath = req.getServletPath();
 
        System.out.println("#INFO " + new Date() + " - ServletPath :" + servletPath //
                + ", URL =" + req.getRequestURL());
		
		// pass the request along the filter chain
		chain.doFilter(request, response);
		
		System.out.println("RedirectFilter ended!!!");
		
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
