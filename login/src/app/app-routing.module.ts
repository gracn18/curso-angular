import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent} from './pages/ingresar/ingresar.component';
import { CrearUsuarioComponent} from './pages/crear-usuario/crear-usuario.component';
import { HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  {path:"registrar",  component:CrearUsuarioComponent},
  {path:"ingresar", component:IngresarComponent},
  {path:"principal", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
