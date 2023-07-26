import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
let NewExperienciaComponent = class NewExperienciaComponent {
    constructor(sExperiencia, router) {
        this.sExperiencia = sExperiencia;
        this.router = router;
        this.nombreEx = '';
        this.descripcionEx = '';
    }
    ngOnInit() {
    }
    onCreate() {
        const expe = new Experiencia(this.nombreEx, this.descripcionEx);
        this.sExperiencia.save(expe).subscribe(data => {
            alert("Experiencia añadida");
            this.router.navigate(['']);
        }, err => {
            alert("Falló");
            this.router.navigate(['home']);
        });
    }
};
NewExperienciaComponent = __decorate([
    Component({
        selector: 'app-new-experiencia',
        templateUrl: './new-experiencia.component.html',
        styleUrls: ['./new-experiencia.component.css']
    })
], NewExperienciaComponent);
export { NewExperienciaComponent };
//# sourceMappingURL=new-experiencia.component.js.map