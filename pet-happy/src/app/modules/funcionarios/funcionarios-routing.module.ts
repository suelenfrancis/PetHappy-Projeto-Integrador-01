import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FuncionariosComponent } from "./funcionarios.component";
import { FuncionarioFormularioComponent } from "./funcionario-formulario/funcionario-formulario.component";
import { AuthGuard } from "src/app/guards/auth.guard";

const routes: Routes = [{
    path: 'funcionarios',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: FuncionariosComponent
      },
      {
        path: 'form',
        component: FuncionarioFormularioComponent
      },
      {
        path: ':id/form',
        component: FuncionarioFormularioComponent
      }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FuncionariosRoutingModule {}