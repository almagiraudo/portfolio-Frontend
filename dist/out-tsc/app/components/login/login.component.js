import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LoginUsuario } from 'src/app/model/login-usuario';
let LoginComponent = class LoginComponent {
    constructor(tokenService, authService, router) {
        this.tokenService = tokenService;
        this.authService = authService;
        this.router = router;
        this.isLogged = false;
        this.isLogginFail = false;
        this.roles = [];
    }
    ngOnInit() {
        if (this.tokenService.getToken()) {
            this.isLogged = true;
            this.isLogginFail = false;
            this.roles = this.tokenService.getAuthorities();
        }
    }
    onLogin() {
        this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
        this.authService.login(this.loginUsuario).subscribe(data => {
            this.isLogged = true;
            this.isLogginFail = false;
            this.tokenService.setToken(data.token);
            this.tokenService.setUserName(data.nombreUsuario);
            this.tokenService.setAuthorities(data.authorities);
            this.roles = data.authorities;
            this.router.navigate(['']);
        }, err => {
            this.isLogged = false;
            this.isLogginFail = true;
            this.errMsj = err.error.mensaje;
            console.log(this.errMsj);
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map