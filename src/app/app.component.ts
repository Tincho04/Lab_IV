import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Martín Silva';
  sum = '';
  prom = '';
  edad1 = 'Edad1';
  edad2 = 'Edad2';

  CambiarTitulo()
  {
    this.title = "otro titulo";
  }
  Calcular()
  {
    var intEdad1 = parseInt(this.edad1);
    var intEdad2 = parseInt(this.edad2);
    var total = intEdad1 + intEdad2;
    var promedio = total/2;

    this.sum = 'Total de la suma: ' + total.toString();
    this.prom = 'Promedio :' + promedio.toString();
  }
  Limpiar()
  {
    this.edad1 = "";
    this.edad2 = "";
  }
}
