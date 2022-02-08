import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarCuentaComponent } from './actualizar-cuenta/actualizar-cuenta.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { ListarCuentaComponent } from './listar-cuenta/listar-cuenta.component';
import { ListarEmpleadoComponent } from './listar-empleado/listar-empleado.component';
import { RegistrarCuentaComponent } from './registrar-cuenta/registrar-cuenta.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';

const routes: Routes = [
  {path : 'empleado',component:ListarEmpleadoComponent},
  {path: '',redirectTo:'empleado',pathMatch:'full'},
  {path:'cuenta', component:ListarCuentaComponent},
  {path : 'registrar-empleado', component:RegistrarEmpleadoComponent},
  {path : 'registrar-cuenta', component:RegistrarCuentaComponent},
  {path: 'editar-cuenta/:idcuenta',component:ActualizarCuentaComponent },
  {path: 'editar-empleado/:idempleado',component:ActualizarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
