import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { ServicosComponent } from "./servicos.component";
import { ServicoFormComponent } from "./servico-form/servico-form.component";

const routes: Routes = [
    {
        path: 'servicos',
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: ServicosComponent,
            },
            {
                path: 'form',
                component: ServicoFormComponent,
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicosRoutingModule {} 