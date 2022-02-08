import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuenta } from '../cuenta';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../Servicios/empleado.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {
  cuentas: Cuenta[] = [];
  id:number;
  empleado: Empleado = new Empleado();

  constructor(private empleados:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
