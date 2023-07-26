import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Skills } from 'src/app/model/skills';
let EditSkillsComponent = class EditSkillsComponent {
    constructor(skillS, activatedRouter, router) {
        this.skillS = skillS;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.skill = new Skills("", 0, "");
    }
    ngOnInit() {
        const id = this.activatedRouter.snapshot.params['id'];
        this.skillS.detail(id).subscribe(data => {
            this.skill = data;
        }, err => {
            alert("Error al modificar");
            this.router.navigate(['']);
        });
    }
    onUpdate() {
        const id = this.activatedRouter.snapshot.params['id'];
        this.skillS.update(id, this.skill).subscribe(data => {
            this.router.navigate(['']);
        }, err => {
            alert("Error al modificar la skill");
            this.router.navigate(['']);
        });
    }
    obtener(e) {
        this.skill.img = e[0].base64;
        console.log(this.skill.img);
    }
};
EditSkillsComponent = __decorate([
    Component({
        selector: 'app-edit-skills',
        templateUrl: './edit-skills.component.html',
        styleUrls: ['./edit-skills.component.css']
    })
], EditSkillsComponent);
export { EditSkillsComponent };
//# sourceMappingURL=edit-skills.component.js.map