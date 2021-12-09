import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Isabella';
  genero: string = 'femenino';

  // i18nSelect pipe
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural 
  clientes: string[] = ['maria', 'juan', 'pedro', 'raul'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    '=3': 'tenemos 3 clientes espernado',
    'other': 'tenemos # clientes esperando'
    // # tamaño del arreglo clientes
  }

  cambiarPersona(): void {
    this.genero === 'femenino' ? this.genero = 'masculino' : this.genero = 'femenino';
    this.nombre === 'Isabella' ? this.nombre = 'Fernando' : this.nombre = 'Isabella';
    console.log('hola mundo');
  }

  borrarCliente(): void {
    this.clientes.shift();
  }

  // keyValue pipe
  persona = {
    'nombre': 'Fernando',
    'edad': 35,
    'direccion': 'Ottawa, Canadá '
  }


  // async pipe 
  miObservable = interval(1000); // 0,1,2,3,4,.......,n

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data de promesa');
    }, 3500)
  })

}
