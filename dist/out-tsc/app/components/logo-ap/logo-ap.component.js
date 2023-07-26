import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LogoAPComponent = class LogoAPComponent {
    constructor(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
        this.isLogged = false;
    }
    ngOnInit() {
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        }
        else {
            this.isLogged = false;
        }
    }
    onLogOut() {
        this.tokenService.logOut();
        window.location.reload();
    }
    login() {
        this.router.navigate(['/inicio-sesion']);
    }
};
LogoAPComponent = __decorate([
    Component({
        selector: 'app-logo-ap',
        templateUrl: './logo-ap.component.html',
        styleUrls: ['./logo-ap.component.css']
    })
], LogoAPComponent);
export { LogoAPComponent };
//# sourceMappingURL=logo-ap.component.js.map