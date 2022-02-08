import { Cuenta } from "./cuenta";

export class Empleado {

    idempleado: number;
    nombre: string;
    apellido: string;
    dni:string;
    celular:string;
    correo:string;
    cuenta:Cuenta = new Cuenta();

}
