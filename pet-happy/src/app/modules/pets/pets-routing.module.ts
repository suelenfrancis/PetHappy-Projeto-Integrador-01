import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { PetsComponent } from "./pets.component";
import { PetFormularioComponent } from "./pet-formulario/pet-formulario.component";


const routes: Routes = [
    {
        path: 'pets',
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: PetsComponent
            },
            {
                path: 'form',
                component: PetFormularioComponent
            },
            {
                path: ':id/form',
                component: PetFormularioComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PetsRoutingModule {} 