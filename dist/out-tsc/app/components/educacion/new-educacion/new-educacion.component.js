import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
let NewEducacionComponent = class NewEducacionComponent {
    constructor(seducacion, router) {
        this.seducacion = seducacion;
        this.router = router;
        this.nombreE = '';
        this.descripcionE = '';
    }
    ngOnInit() {
    }
    onCreate() {
        const educacion = new Educacion(this.nombreE, this.descripcionE);
        this.seducacion.save(educacion).subscribe(data => {
            alert("Educacion añadida correctamente");
            this.router.navigate(['']);
        }, err => {
            alert("Falló");
            this.router.navigate(['']);
        });
    }
};
NewEducacionComponent = __decorate([
    Component({
        selector: 'app-new-educacion',
        templateUrl: './new-educacion.component.html',
        styleUrls: ['./new-educacion.component.css']
    })
], NewEducacionComponent);
export { NewEducacionComponent };
//# sourceMappingURL=new-educacion.component.js.map