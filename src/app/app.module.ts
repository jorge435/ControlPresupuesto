import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEmpleadoComponent } from './listar-empleado/listar-empleado.component';

import {HttpClientModule} from '@angular/common/http';
import { ListarCuentaComponent } from './listar-cuenta/listar-cuenta.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { RegistrarCuentaComponent } from './registrar-cuenta/registrar-cuenta.component';
import { FormsModule } from '@angular/forms';
import { ActualizarCuentaComponent } from './actualizar-cuenta/actualizar-cuenta.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarEmpleadoComponent,
    ListarCuentaComponent,
    RegistrarEmpleadoComponent,
    RegistrarCuentaComponent,
    ActualizarCuentaComponent,
    ActualizarEmpleadoComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
