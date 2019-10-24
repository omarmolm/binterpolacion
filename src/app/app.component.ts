import { Component } from '@angular/core';
import { Foto } from './fotos/foto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diseño Web Ing Sistemas CUL';
  fotoSelecc: Foto = null;
  selecc(seleccionada: Foto ) {
    this.fotoSelecc = seleccionada;
  }
}
