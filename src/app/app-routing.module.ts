import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavegacionComponent} from './navegacion/navegacion.component';
import {AppComponent} from './app.component';
import {InicioComponent} from './inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
