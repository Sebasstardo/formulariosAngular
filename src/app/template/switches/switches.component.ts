import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent  {

  persona = {
    genero:'',
    notificaciones: true
  }

  terminosYCondiciones: boolean = true;
}
