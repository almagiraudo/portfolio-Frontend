import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EditEducacionComponent = class EditEducacionComponent {
    constructor(seducacion, activatedRoute, router) {
        this.seducacion = seducacion;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.educacion = null;
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.params['id'];
        this.seducacion.detail(id).subscribe(data => {
            this.educacion = data;
        }, err => {
            alert("Error al modificar");
            this.router.navigate(['']);
        });
    }
    onUpdate() {
        const id = this.activatedRoute.snapshot.params['id'];
        this.seducacion.update(id, this.educacion).subscribe(data => {
            this.router.navigate(['']);
        }, err => {
            alert("Error al modificar la educacion");
            this.router.navigate(['']);
        });
    }
};
EditEducacionComponent = __decorate([
    Component({
        selector: 'app-edit-educacion',
        templateUrl: './edit-educacion.component.html',
        styleUrls: ['./edit-educacion.component.css']
    })
], EditEducacionComponent);
export { EditEducacionComponent };
//# sourceMappingURL=edit-educacion.component.js.map