import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FuncionariosComponent } from "./funcionarios.component";
import { FuncionarioFormularioComponent } from "./funcionario-formulario/funcionario-formulario.component";

const routes: Routes = [
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
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FuncionariosRoutingModule {}