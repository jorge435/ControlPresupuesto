import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuenta } from '../cuenta';
import { Empleado } from '../empleado';
import { CuentaService } from '../Servicios/cuenta.service';
import { EmpleadoService } from '../Servicios/empleado.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
  //definiciones
  alerta:string = '';
  empleado : Empleado = new Empleado();
  cuentas: Cuenta[] = [];
  
  constructor(
    private service:EmpleadoService, 
    private router:Router,
    private cuentaService: CuentaService) { }

  ngOnInit(): void {
    // no estoy seguro que salga xd
    this.cuentaService.listarCuentasLibres().subscribe(
      data => {
        this.cuentas = data;
      }
    );
    
  }


 


  onSubmit(){
    swal(
      "Registro Exitoso", this.alerta,'success' );
    this.RegistrarEmpleado();
   
  }

  RegistrarEmpleado(){

    // valido primero como envio los datos si ejecutar el service
    // como la propiedad cuenta es un objeto, cambio la forma
    // de esa forma llego a la propiedad idcuenta como es un objeto
    // me dio error y tiene razon porq el objeto cuenta jamas lo inicialize, pero creo poder usar un caracter de escape, intentare
    // al parecer solo sirve en este archivo ts xD no en html
    // lo fuerzo a que se inicie ok para que no sea null
    console.log("empl req");
    console.log(this.empleado);    
    
    // ahora si toca su turno
    this.service.registrarEmpleado(this.empleado).subscribe(dato =>{
      console.log("resp correcta");      
      console.log(dato);
      this.iralistaempleado();
    }, error => {
      console.log("error de serviicio registrar empleado");      
      console.log(error)
    });
  }

  iralistaempleado(){
    this.router.navigate(['/empleado']);
  }

}
