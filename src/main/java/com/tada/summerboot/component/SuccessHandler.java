package com.tada.summerboot.component;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import com.tada.summerboot.model.User;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.Console;
import java.io.IOException;
import java.util.Iterator;

@Component
public class SuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest,
                                        HttpServletResponse httpServletResponse,
                                        Authentication authentication) throws IOException, ServletException {
        // After login, go to homepage
//         Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        String r= auth.getAuthorities().toString();
//
//        if(r=="ROLE_ADMIN"){

//        super.onAuthenticationSuccess(httpServletRequest, httpServletResponse, authentication);

        boolean isAdmin = false;
        UserDetails user = (UserDetails) authentication.getPrincipal();
        Iterator<GrantedAuthority> grantedAuthorityIterator = (Iterator<GrantedAuthority>) user.getAuthorities().iterator();
        while (grantedAuthorityIterator.hasNext()) {
            if (grantedAuthorityIterator.next().getAuthority().equalsIgnoreCase("ROLE_ADMIN")) {
                isAdmin = true;
            }
        }

        if (isAdmin) { // if isAdmin is true == true.
//        if(r=="ADMIN"){
            System.out.print("reached /admin");
            httpServletResponse.sendRedirect("/admin");
        }else {
            System.out.print("reached /order");
            httpServletResponse.sendRedirect("/order");
        }
    }
}