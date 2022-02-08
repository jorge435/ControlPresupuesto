import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria';
import { Cuenta } from '../cuenta';
import { Fecha } from '../fecha';
import { CuentaService } from '../Servicios/cuenta.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-registrar-cuenta',
  templateUrl: './registrar-cuenta.component.html',
  styleUrls: ['./registrar-cuenta.component.css']
})
export class RegistrarCuentaComponent implements OnInit {


  //definiciones
  alerta:string = '';

  cuenta : Cuenta = new Cuenta();
  categorias: Categoria[] = [];
  fechas: Fecha[] = [];
  
  constructor(private router:Router, private cuentaService: CuentaService) { }

  ngOnInit(): void {
    this.combocategorias();
    this.combofecha();
  }

  combocategorias(){
    this.cuentaService.listarCategoriasLibres().subscribe(
      data => {
        this.categorias = data;
      }
    );
  }

  combofecha(){
    this.cuentaService.listarFechasLibres().subscribe(
      data => {
        this.fechas = data;
      }
    );
  }

  onSubmit(){
    swal(
      "Registro Exitoso", this.alerta,'success' );
    
    this.registrarCuenta();
  }


  registrarCuenta(){
    console.log("cuenta request");
    console.log(this.cuenta);

    // registrar con servicio
    this.cuentaService.registrarCuenta(this.cuenta).subscribe(dato =>{
      console.log("respuesta correcta");      
      console.log(dato);
      this.iralistacuenta();
    }, error => {
      console.log("error de servicio  registrar cuenta");      
      console.log(error)
    });  

  }

  iralistacuenta(){
    this.router.navigate(['/cuenta']);
  }



}
