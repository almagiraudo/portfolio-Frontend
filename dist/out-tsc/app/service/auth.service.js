import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let AuthService = class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.authURL = environment.URL + 'auth/';
    }
    nuevo(nuevoUsuario) {
        return this.httpClient.post(this.authURL + 'nuevo', nuevoUsuario);
    }
    login(loginUsuario) {
        return this.httpClient.post(this.authURL + 'login', loginUsuario);
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map