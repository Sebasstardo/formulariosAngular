import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  
  @ViewChild('miFormulario') miFormulario!:NgForm;
  initForm = {
    producto :'',
    precio:10,
    existencias:10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched;
  }

  precioValido():boolean{
    return this.miFormulario?.controls['producto']?.touched && this.miFormulario?.controls['precio']?.value < 0 ;
  }
  guardar(){
    // console.log(this.miFormulario)
    console.log('poseto correctos')
    this.miFormulario.resetForm({
      precio:0,
      existencias: 0
    });
  }

}
