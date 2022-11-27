import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo16Component } from './ejemplo16/ejemplo16.component';
import { Ejercicio5Component } from './ejercicio5/ejercicio5.component';

const routes: Routes = [
  { path: 'ejercicio5', component: Ejercicio5Component },
  { path: 'ejemplo16', component: Ejemplo16Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
