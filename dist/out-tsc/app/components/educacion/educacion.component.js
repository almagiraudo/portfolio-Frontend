import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EducacionComponent = class EducacionComponent {
    constructor(educacionS, tokenService, router) {
        this.educacionS = educacionS;
        this.tokenService = tokenService;
        this.router = router;
        this.educacion = [];
        this.isAdmin = false;
        this.isLogged = false;
    }
    ngOnInit() {
        this.cargarEducacion();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        }
        else {
            this.isLogged = false;
        }
    }
    cargarEducacion() {
        this.educacionS.list().subscribe(data => {
            this.educacion = data;
        });
    }
    delete(id) {
        if (id != undefined) {
            this.educacionS.delete(id).subscribe(data => {
                this.cargarEducacion();
            }, err => {
                alert("No se pudo eliminar");
            });
        }
    }
};
EducacionComponent = __decorate([
    Component({
        selector: 'app-educacion',
        templateUrl: './educacion.component.html',
        styleUrls: ['./educacion.component.css']
    })
], EducacionComponent);
export { EducacionComponent };
//# sourceMappingURL=educacion.component.js.map