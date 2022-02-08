import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria';
import { Cuenta } from '../cuenta';
import { Fecha } from '../fecha';
import { CuentaService } from '../Servicios/cuenta.service';
import swal from'sweetalert2';
@Component({
  selector: 'app-actualizar-cuenta',
  templateUrl: './actualizar-cuenta.component.html',
  styleUrls: ['./actualizar-cuenta.component.css']
})
export class ActualizarCuentaComponent implements OnInit {

  id:number;
  cuentas: Cuenta = new Cuenta();
  
  categorias: Categoria[] = [];
  fechas: Fecha[] = [];

  constructor(private cuentaservice:CuentaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    console.log("respuesta")
    
    this.id = this.route.snapshot.params['idcuenta'];
    console.log(this.id)
    this.cuentaservice.obtenercuentaporid(this.id).subscribe(dato =>{      
      this.cuentas = dato;
      
    },
    error => console.log(error)

    );
  }

  irAlaListaDeCuentas(){
    this.router.navigate(['/cuenta']);
    swal('Cuenta actualizada',`La cuenta ${this.cuentas.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.cuentaservice.actualizarCuenta(this.id,this.cuentas).subscribe(dato =>{
      this.irAlaListaDeCuentas();

  },error =>console.error(error)
  );
  }


 
}



