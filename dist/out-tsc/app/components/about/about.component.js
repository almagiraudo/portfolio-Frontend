import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
let AboutComponent = class AboutComponent {
    constructor(personaService) {
        this.personaService = personaService;
        this.persona = new Persona("", "", "", "");
        this.personas = [];
        this.isLogged = false;
    }
    ngOnInit() {
        this.personaService.list().subscribe(data => { this.personas = data; });
    }
};
AboutComponent = __decorate([
    Component({
        selector: 'app-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.css']
    })
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=about.component.js.map