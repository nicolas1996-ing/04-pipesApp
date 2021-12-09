import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modulos
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
// componentes
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

// pipes
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaNoVuelaPipe } from './pipes/vuelaNoVuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    // componentes
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,

    // pipes
    MayusculasPipe,
    VuelaNoVuelaPipe,
    OrdenarPipe
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
