import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../categoria';
import { Cuenta } from '../cuenta';
import { Fecha } from '../fecha';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private baseurl2 = "http://localhost:8084/presupuesto/desviaciones/listar";

  private urlcategoria = "http://localhost:8084/presupuesto/categoria/listar/categoriaslibres"

  private urlfecha = "http://localhost:8084/presupuesto/fecha/listar/fechaslibres"


  private registrarcuenta = "http://localhost:8084/presupuesto/desviaciones/registrar";

  private actualizar = "http://localhost:8084/presupuesto/desviaciones/editar";
  private buscarporid = "http://localhost:8084/presupuesto/desviaciones/buscar";

  constructor(private httpclient: HttpClient) { }

  obtenercuenta():Observable<Cuenta[]>{
    return this.httpclient.get<Cuenta[]>(this.baseurl2);
  }

  listarCuentasLibres():Observable<Cuenta[]>{
    return this.httpclient.get<Cuenta[]>(this.baseurl2+"/cuentaslibres");   
  }

  listarCategoriasLibres():Observable<Categoria[]>{
    return this.httpclient.get<Categoria[]>(this.urlcategoria);  
  }

  listarFechasLibres():Observable<Fecha[]>{
    return this.httpclient.get<Fecha[]>(this.urlfecha); 
  }

  registrarCuenta(cuenta:Cuenta) : Observable<any>{    
    return this.httpclient.post<any>(this.registrarcuenta,cuenta);    
  }

    //este metodo sirve para obtener o buscar por id
  obtenercuentaporid(id:number):Observable<Cuenta>{
    return this.httpclient.get<Cuenta>(this.buscarporid+"/"+id);
  }

  actualizarCuenta(id:number,cuenta:Cuenta) :Observable<any>{
    return this.httpclient.put(`${this.actualizar}/${id}`,cuenta);
  }

}
