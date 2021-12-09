import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  valor: boolean = false;


  cambiarLetras() {
    // this.valor === false ? this.valor = true : this.valor = false;
    this.valor = !this.valor;
  }

  heroes: Heroe[] = [{
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
  },
  {
    nombre: 'Batman',
    vuela: true,
    color: Color.negro
  },
  {
    nombre: 'Robin',
    vuela: false,
    color: Color.verde
  },
  {
    nombre: 'Daredevil',
    vuela: false,
    color: Color.rojo
  },
  {
    nombre: 'Linterna Verde',
    vuela: true,
    color: Color.verde
  }];


  // pipe ordenar 
  // cambiar argumentos del pipe ordenar 
  ordenarPor1: string = '';
  cambiarOrden(valor: string) {
    this.ordenarPor1 = valor;
    console.log(valor);
  }
}
