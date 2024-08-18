import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { FuncionariosComponent } from './modules/funcionarios/funcionarios.component';
import { FuncionarioFormularioComponent } from './modules/funcionarios/funcionario-formulario/funcionario-formulario.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'funcionarios',
    component: FuncionariosComponent
  },
  {
    path: 'funcionarios/form',
    component: FuncionarioFormularioComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
