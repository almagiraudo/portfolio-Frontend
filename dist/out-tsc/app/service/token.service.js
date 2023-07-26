import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
let TokenService = class TokenService {
    constructor() {
        this.roles = [];
    }
    setToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    setUserName(userName) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, userName);
    }
    getUserName() {
        return sessionStorage.getItem(USERNAME_KEY);
    }
    setAuthorities(authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }
    getAuthorities() {
        this.roles = [];
        if (sessionStorage.getItem(AUTHORITIES_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach((authority) => {
                this.roles.push(authority.authority);
            });
        }
        return this.roles;
    }
    logOut() {
        window.sessionStorage.clear();
    }
};
TokenService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TokenService);
export { TokenService };
//# sourceMappingURL=token.service.js.map