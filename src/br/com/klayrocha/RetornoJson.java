package br.com.klayrocha;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

@WebServlet("/retornoJson")
public class RetornoJson extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public RetornoJson() {
		super();
	}

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		recuperarUsuarios(request, response);
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		recuperarUsuarios(request, response);
	}

	private void recuperarUsuarios(final HttpServletRequest request,
			final HttpServletResponse response) throws IOException {
		try {
			System.out.println("cheogu no recuperarUsuarios ");
			request.setCharacterEncoding("UTF-8");
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			JSONObject jsonObjectRET = new JSONObject();
			jsonObjectRET.put("nome","klay");
			jsonObjectRET.put("senha","123");
			response.getWriter().print(jsonObjectRET);
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}


}
