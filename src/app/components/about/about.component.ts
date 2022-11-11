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
  personas: Persona[]=[];
  constructor(public personaService:PersonaService) { }

  isLogged=false;

  ngOnInit(): void {
    this.personaService.list().subscribe(data => {this.personas = data})
  }

  

}
