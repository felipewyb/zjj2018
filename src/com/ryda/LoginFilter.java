package com.ryda;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

;
public class LoginFilter implements Filter{
    public void destroy() {
        // TODO Auto-generated method stub

    }

    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        // TODO Auto-generated method stub
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
        HttpSession session = request.getSession();
        // 如果session不为空，则可以浏览其他页面
        String url = request.getServletPath();
        //这里判断目录，后缀名，当然也可以写在web.xml中，用url-pattern进行拦截映射
        if ((!request.getServletPath().equals("/login_user.action"))//登录页action
                && (!request.getServletPath().equals("/login_login.action")) //登录提交action
                && (!request.getServletPath().contains(".css"))//后缀.css放行
                && (!request.getServletPath().contains(".js"))//后缀.js放行
                && (!request.getServletPath().contains(".png"))//后缀.png放行
                ) {
            // System.out.println(request.getServletPath());
            if (session.getAttribute("username") == null) {
                session.invalidate();
                response.setContentType("text/html;charset=gb2312");
                PrintWriter out = response.getWriter();
                out.println("<script language='javascript' type='text/javascript'>");
                out.println("window.location.href='" + request.getContextPath() + "/login_user.action'");
                out.println("</script>");
            } else {
                chain.doFilter(request, response);
            }
        } else {
            chain.doFilter(request, response);
        }

    }

    public void init(FilterConfig arg0) throws ServletException {
        // TODO Auto-generated method stub

    }

}