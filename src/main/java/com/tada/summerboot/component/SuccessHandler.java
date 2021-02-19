package com.tada.summerboot.component;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import com.tada.summerboot.model.User;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.Console;
import java.io.IOException;

@Component
public class SuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest,
                                        HttpServletResponse httpServletResponse,
                                        Authentication authentication) throws IOException, ServletException {
        // After login, go to homepage
//         Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        String r= auth.getAuthorities().toString();
//
////        if(r=="ROLE_ADMIN"){
//        if(r=="ADMIN"){
//            System.out.print(r);
            httpServletResponse.sendRedirect("/admin");
//        }else {
//            System.out.print(r);
//            httpServletResponse.sendRedirect("/every-products");
//        }
    }
}