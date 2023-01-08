import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string;
  favoritos:Favorito[]
}
interface Favorito{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  @ViewChild('miFormularioDinamico') miFormularioDinamico!:NgForm;

  nuevoJuego: string =" ";

  persona: Persona = {
    nombre:'Seba',
    favoritos:[
      {id:1, nombre:'Metal Gear'},
      {id:2, nombre:'Dragon Ball'},      
    ]
  }



  nombreValido():boolean{
    return this.miFormularioDinamico?.controls['nombre']!.invalid && this.miFormularioDinamico?.controls['nombre']?.touched;
  }
 
  guardar(){
    console.log('formulario')
  }
  eliminar(index:number){
    this.persona.favoritos.splice(index,1)
  }
  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre:this.nuevoJuego
    }

    this.persona.favoritos.push(nuevoFavorito)
  }

}
