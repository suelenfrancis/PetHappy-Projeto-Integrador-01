import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'funcionarios',
    redirectTo: '/funcionarios',
    pathMatch: 'full',
  },
  {
    path: 'clientes',
    redirectTo: '/clientes',
    pathMatch: 'full',
  },
  {
    path: 'pets',
    redirectTo: '/pets',
    pathMatch: 'full',
  },
  {
    path: 'servicos',
    redirectTo: '/servicos',
    pathMatch: 'full',
  },
  {
    path: 'login',
    redirectTo: '/login',
    pathMatch: 'full'
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
