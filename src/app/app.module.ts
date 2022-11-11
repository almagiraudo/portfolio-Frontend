import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardandsoftskillsComponent } from './components/hardandsoftskills/hardandsoftskills.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule} from './components/app-router.modules';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { EditSkillsComponent } from './components/hardandsoftskills/edit-skills/edit-skills.component';
import { NewSkillsComponent } from './components/hardandsoftskills/new-skills/new-skills.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { NewProyectComponent } from './components/proyecto/new-proyect/new-proyect.component';
import { EditProyectComponent } from './components/proyecto/edit-proyect/edit-proyect.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardandsoftskillsComponent,
    ProyectoComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    NewProyectComponent,
    EditProyectComponent
    
    
    
  ],
   
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AlifeFileToBase64Module,
   

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
