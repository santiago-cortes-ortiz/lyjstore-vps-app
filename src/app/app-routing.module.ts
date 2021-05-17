import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from './inicio/inicio.component';
import {BancoComponent} from './banco/banco.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'banco', component: BancoComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
