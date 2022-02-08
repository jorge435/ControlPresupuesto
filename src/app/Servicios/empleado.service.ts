import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseurl = "http://localhost:8084/presupuesto/empleado/listar";
  private baseurlregistro = "http://localhost:8084/presupuesto/empleado/registrar";
  private eliminarempleado = "http://localhost:8084/presupuesto/empleado/borrar";

  private actualizar = "http://localhost:8084/presupuesto/empleado/editar";
  private buscarporid = "http://localhost:8084/presupuesto/empleado/buscar";

  constructor(private httpClient : HttpClient) { }

  obtenerlistaEmpleado():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(this.baseurl);
  }
  registrarEmpleado(empleado:Empleado) : Observable<any>{
    // aya xd, aca tu le dices que deseas un objeto xd puede ser esto
    return this.httpClient.post<any>(this.baseurlregistro,empleado);    
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.eliminarempleado}/${id}`);
  }


  obtenerempleadoporid(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(this.buscarporid+"/"+id);
  }

  actualizarEmpleado(id:number,empleado:Empleado) :Observable<any>{
    return this.httpClient.put(`${this.actualizar}/${id}`,empleado);
  }
}
