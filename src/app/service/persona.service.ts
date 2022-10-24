import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = 'https://portfoliobackendag.herokuapp.com/personas/';
  constructor(private http: HttpClient) { }

  public getPersona(){
    return this.http.get<Persona[]>(this.URL+'list');    
  }
}
