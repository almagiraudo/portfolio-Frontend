import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditEducacionComponent } from "./educacion/edit-educacion/edit-educacion.component";
import { NewEducacionComponent } from "./educacion/new-educacion/new-educacion.component";
import { EditExperienciaComponent } from "./experiencia/edit-experiencia/edit-experiencia.component";
import { NewExperienciaComponent } from "./experiencia/new-experiencia/new-experiencia.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";


const  routes: Routes=[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'inicio-sesion',component:LoginComponent},
    {path:'nuevaexpe', component: NewExperienciaComponent},
    {path:'editexp/:id',component: EditExperienciaComponent},
    {path:'nuevaedu', component:NewEducacionComponent},
    {path:'editedu/:id',component: EditEducacionComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}

