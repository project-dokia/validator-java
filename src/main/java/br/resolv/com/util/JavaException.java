package br.resolv.com.util;

/**
 * 
 * @author thiagoc
 *
 */
public class JavaException extends Exception {// Exception = checked ou
												// RunTimeException = uncheked..
												// o Exception força

	private static final long serialVersionUID = 1L;

	public JavaException(String message) {
		super("JavaException message: " + message);
		System.out.println("Ocorreu uma Exception JavaException message: "
				+ message);
	}
}
