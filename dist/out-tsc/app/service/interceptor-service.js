import { __decorate } from "tslib";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
let InterceptorService = class InterceptorService {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    intercept(req, next) {
        let intReq = req;
        const token = this.tokenService.getToken();
        if (token != null) {
            intReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer' + token)
            });
        }
        return next.handle(intReq);
    }
};
InterceptorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], InterceptorService);
export { InterceptorService };
export const interceptorProvider = [{
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
    }];
//# sourceMappingURL=interceptor-service.js.map