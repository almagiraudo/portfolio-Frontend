import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EditEducacionComponent } from "./educacion/edit-educacion/edit-educacion.component";
import { NewEducacionComponent } from "./educacion/new-educacion/new-educacion.component";
import { EditExperienciaComponent } from "./experiencia/edit-experiencia/edit-experiencia.component";
import { NewExperienciaComponent } from "./experiencia/new-experiencia/new-experiencia.component";
import { EditSkillsComponent } from "./hardandsoftskills/edit-skills/edit-skills.component";
import { NewSkillsComponent } from "./hardandsoftskills/new-skills/new-skills.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'inicio-sesion', component: LoginComponent },
    { path: 'nuevaexpe', component: NewExperienciaComponent },
    { path: 'editexp/:id', component: EditExperienciaComponent },
    { path: 'nuevaedu', component: NewEducacionComponent },
    { path: 'editedu/:id', component: EditEducacionComponent },
    { path: 'nuevaskill', component: NewSkillsComponent },
    { path: 'editarskill/:id', component: EditSkillsComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-router.modules.js.map