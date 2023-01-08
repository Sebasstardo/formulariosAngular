import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../shared/validator/validator.service';
import { EmailValidatorService } from '../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //las valdiaciones pattern llegan importadas de validaciones.ts
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validator.nombreApellidoPattern ) ]],
    email:['',[Validators.required, Validators.pattern(this.validator.emailPattern)],[this.emailValidator]],
    username:['',[Validators.required, this.validator.noPuedeSerStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]],
  },{
    validators:[this.validator.camposIguales('password','password2')]
  })

  constructor( private fb: FormBuilder, private validator: ValidatorService,
                private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Sebastian Miranda'
    })
  }
  campoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    this.miFormulario.markAllAsTouched();
  }
}
