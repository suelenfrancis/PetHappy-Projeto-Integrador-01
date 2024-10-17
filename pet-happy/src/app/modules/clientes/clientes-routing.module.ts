import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./clientes.component";
import { AuthGuard } from "src/app/guards/auth.guard";
import { ClienteFormularioComponent } from "./cliente-formulario/cliente-formulario.component";

const routes: Routes = [
    {
        path: 'clientes',
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: ClientesComponent,
            },
            {
                path: 'form',
                component: ClienteFormularioComponent
              },
              {
                path: ':id/form',
                component: ClienteFormularioComponent
              }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule {}