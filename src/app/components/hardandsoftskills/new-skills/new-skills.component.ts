import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  nombre:string = '';
  porcentaje: number = 0;
  img: string = '';
  
  constructor(private skillsS: SkillsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skills= new Skills(this.nombre, this.porcentaje, this.img);
    this.skillsS.save(skills).subscribe(
      data=>{
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert ("Falló al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }
  obtener(e:any){
    this.img=e[0].base64;
  }
}
