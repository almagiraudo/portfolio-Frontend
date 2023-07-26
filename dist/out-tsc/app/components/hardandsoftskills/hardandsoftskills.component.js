import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HardandsoftskillsComponent = class HardandsoftskillsComponent {
    constructor(skillS, tokenService) {
        this.skillS = skillS;
        this.tokenService = tokenService;
        this.skills = [];
        this.isLogged = false;
    }
    ngOnInit() {
        this.cargarSkills();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        }
        else {
            this.isLogged = false;
        }
    }
    cargarSkills() {
        this.skillS.lista().subscribe(data => {
            this.skills = data;
        });
    }
    delete(id) {
        if (id != undefined) {
            this.skillS.delete(id).subscribe(data => {
                this.cargarSkills();
            });
        }
    }
};
HardandsoftskillsComponent = __decorate([
    Component({
        selector: 'app-hardandsoftskills',
        templateUrl: './hardandsoftskills.component.html',
        styleUrls: ['./hardandsoftskills.component.css']
    })
], HardandsoftskillsComponent);
export { HardandsoftskillsComponent };
//# sourceMappingURL=hardandsoftskills.component.js.map