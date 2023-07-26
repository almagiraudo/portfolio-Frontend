import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EditExperienciaComponent = class EditExperienciaComponent {
    constructor(sExperiencia, activatedRouter, router) {
        this.sExperiencia = sExperiencia;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.expLab = null;
    }
    ngOnInit() {
        const id = this.activatedRouter.snapshot.params['id'];
        this.sExperiencia.detail(id).subscribe(data => {
            this.expLab = data;
        }, err => {
            alert("Error al modificar experiencia");
            this.router.navigate(['']);
        });
    }
    onUpdate() {
        const id = this.activatedRouter.snapshot.params['id'];
        this.sExperiencia.update(id, this.expLab).subscribe(data => {
            this.router.navigate(['']);
        }, err => {
            alert("Error al modificar experiencia");
            this.router.navigate(['']);
        });
    }
};
EditExperienciaComponent = __decorate([
    Component({
        selector: 'app-edit-experiencia',
        templateUrl: './edit-experiencia.component.html',
        styleUrls: ['./edit-experiencia.component.css']
    })
], EditExperienciaComponent);
export { EditExperienciaComponent };
//# sourceMappingURL=edit-experiencia.component.js.map