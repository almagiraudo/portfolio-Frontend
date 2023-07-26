import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ExperienciaComponent = class ExperienciaComponent {
    constructor(sExperiencia, tokenService) {
        this.sExperiencia = sExperiencia;
        this.tokenService = tokenService;
        this.expe = [];
        this.isLogged = false;
    }
    ngOnInit() {
        this.cargarExperiencia();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        }
        else {
            this.isLogged = false;
        }
    }
    cargarExperiencia() {
        this.sExperiencia.lista().subscribe(data => { this.expe = data; });
    }
    delete(id) {
        if (id != undefined) {
            this.sExperiencia.delete(id).subscribe(data => {
                this.cargarExperiencia();
            }, err => {
                alert("No se pudo borrar la experiencia");
            });
        }
    }
};
ExperienciaComponent = __decorate([
    Component({
        selector: 'app-experiencia',
        templateUrl: './experiencia.component.html',
        styleUrls: ['./experiencia.component.css']
    })
], ExperienciaComponent);
export { ExperienciaComponent };
//# sourceMappingURL=experiencia.component.js.map