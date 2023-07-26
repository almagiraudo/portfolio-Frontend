import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Skills } from 'src/app/model/skills';
let NewSkillsComponent = class NewSkillsComponent {
    constructor(skillsS, router) {
        this.skillsS = skillsS;
        this.router = router;
        this.nombre = '';
        this.porcentaje = 0;
        this.img = '';
    }
    ngOnInit() {
    }
    onCreate() {
        const skills = new Skills(this.nombre, this.porcentaje, this.img);
        this.skillsS.save(skills).subscribe(data => {
            alert("Skill creada correctamente");
            this.router.navigate(['']);
        }, err => {
            alert("Falló al añadir la skill");
            this.router.navigate(['']);
        });
    }
    obtener(e) {
        this.img = e[0].base64;
    }
};
NewSkillsComponent = __decorate([
    Component({
        selector: 'app-new-skills',
        templateUrl: './new-skills.component.html',
        styleUrls: ['./new-skills.component.css']
    })
], NewSkillsComponent);
export { NewSkillsComponent };
//# sourceMappingURL=new-skills.component.js.map