import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuenta } from '../cuenta';
import { CuentaService } from '../Servicios/cuenta.service';

@Component({
  selector: 'app-listar-cuenta',
  templateUrl: './listar-cuenta.component.html',
  styleUrls: ['./listar-cuenta.component.css']
})
export class ListarCuentaComponent implements OnInit {

  cuentas: Cuenta[];

  constructor(private CuentaServicio: CuentaService, private router:Router) { }

  ngOnInit(): void {

    this.obtenerdesviaciones();
  }

  private obtenerdesviaciones(){
    this.CuentaServicio.obtenercuenta().subscribe(dato =>{
        this.cuentas = dato;
    });
  }

  actualizarCuenta(id:number){    
    this.router.navigate(['editar-cuenta',id]);
  }

}
