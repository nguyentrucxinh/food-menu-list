package com.github.nguyentrucxinh.foodmenulist.common.constants;

public class SecurityConstants {
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final long EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 10; // 10 days
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String ROOT_URL = "/";
    public static final String LOG_IN_URL = "/login";
    public static final String SIGN_UP_URL = "/sign-up";
    public static final String SIGN_UP_ADMIN_URL = "/sign-up-admin";
    public static final String CONFIRM_MAIL_SIGN_UP_URL = "/confirm-mail-sign-up";
    public static final String API_ADMIN_URL = "/api/admin";
    public static final String API_USER_URL = "/api/user";
}
