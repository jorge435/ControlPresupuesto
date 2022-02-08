import { Categoria } from "./categoria";
import { Fecha } from "./fecha";

export class Cuenta {

    idcuenta:number;
    nombre:string; 
    presupuestoB:number;
    reales:number;
    diferencia:number;
    contable:number;
    tiempo:number;
    eficiencias:number;
    fecha:Fecha = new Fecha();
    categoria:Categoria = new Categoria();
    
}
