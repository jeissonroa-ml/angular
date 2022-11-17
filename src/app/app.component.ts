import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  person = {
    title : 'hola soy json',
    name : 'Json',
    age : 18
  }
  btnDisabled = false;
  toggleButton(){
    this.btnDisabled = true;
  }

  aumentarEdad(){
    this.person.age += 1;
  }
}
