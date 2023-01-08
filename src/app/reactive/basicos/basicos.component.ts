import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(500),
  //   existencias: new FormControl(2),
  // })

  //es mas facil de ver el formBuilder
  miFormulario: FormGroup = this.fb.group({
    //validadores sincronos
    nombre: [ '', [Validators.required, Validators.minLength(3)]],
    precio: [,[Validators.required,Validators.min(0)]],
    existencias: [,[Validators.required,Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    //para establecer valores en el formulario
    this.miFormulario.reset({
      nombre:'Goku',
      precio:1000,
      existencias:10
    })
  }


  campoValido( campo:string){
     return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){
    // console.log(this.miFormulario.value)
    //mostrar todos los mensajes de error
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.miFormulario.reset();
  }


}
