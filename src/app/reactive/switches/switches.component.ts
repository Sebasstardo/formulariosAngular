import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    genero:[ 'M', Validators.required ],
    notificaciones:[ true, Validators.required ],
    //para validar booleanos
    condiciones: [false, Validators.requiredTrue ]
  });
  persona ={
    genero : 'F',
    notificaciones: true,
    
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //para que siempre tenga las condiciones
    //investigar para que sirve el reset :C 257, 260
    this.miFormulario.reset({...this.persona, condiciones:true});

   
    this.miFormulario.valueChanges.subscribe(form =>{
      //para eliminar las condiciones de los cambios
      delete form.condiciones
      this.persona = form;
      // console.log(form)
    })

  }
  guardar(){
    const formValue = {...this.miFormulario.value};
    //para eliminar las condiciones al guardar
   delete formValue.condiciones;
   this.persona = formValue;
  }

}
