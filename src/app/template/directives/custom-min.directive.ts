import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";
//es para implementar errores
//la directiva tiene que tener el customMIn y ngModel para poder entrar al input de existencias
//para poder ser leida ademas tiene que ir incluida en module

@Directive({
    selector:'[customMin] [ngModel]',
    providers:[{

        provide:NG_VALIDATORS,
        useExisting:CustomMinDirective,
        multi:true
    }]
})
export class CustomMinDirective implements Validator{


    @Input()minimo!: number;

    constructor(){
        // console.log('directiva', this.minimo)
    }


    validate( control:FormControl){
        const inputValue = control.value;
        // console.log(inputValue);
        return (inputValue< this.minimo) ? {'customMIn':true} : null;
    }
}