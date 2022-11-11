import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: Persona = new Persona("","","","");

  constructor(public personaService:PersonaService,
    private tokenService:TokenService) { }

  isLogged=false;

  ngOnInit(): void {
  this.cargar();
  if(this.tokenService.getToken()){
    this.isLogged = true;
  } else{
    this.isLogged = false;
  }
  }

  cargar(){
    this.personaService.detail(1).subscribe(data =>
      {this.persona = data});
  }

}
