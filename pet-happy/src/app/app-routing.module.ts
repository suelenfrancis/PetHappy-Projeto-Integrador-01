import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { FuncionariosComponent } from './modules/funcionarios/funcionarios.component';
import { FuncionarioFormularioComponent } from './modules/funcionarios/funcionario-formulario/funcionario-formulario.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
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
    path: 'funcionarios/:id/form',
    component: FuncionarioFormularioComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
