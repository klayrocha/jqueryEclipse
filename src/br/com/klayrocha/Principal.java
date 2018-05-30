package br.com.klayrocha;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/principal")
public class Principal extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	public Principal() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		System.out.println("Chegou aqui ");
		String valor1 =  request.getParameter("valor1");
		System.out.println("Valor 1 "+valor1);
		String valor2 =  request.getParameter("valor2");
		System.out.println("Valor 2 "+valor2);
		
		int soma = Integer.parseInt(valor1) + Integer.parseInt(valor2); 
		
		System.out.println("Soma "+soma);
		
		response.getWriter().append("GET Total da soma : "+String.valueOf(soma));
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("Chegou aqui ");
		String valor1 =  request.getParameter("valor1");
		System.out.println("Valor 1 "+valor1);
		String valor2 =  request.getParameter("valor2");
		System.out.println("Valor 2 "+valor2);
		
		int soma = Integer.parseInt(valor1) + Integer.parseInt(valor2); 
		
		System.out.println("Soma "+soma);
		
		response.getWriter().append("POST Total da soma : "+String.valueOf(soma));
	}

}
