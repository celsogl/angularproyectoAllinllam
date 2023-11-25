export interface Paciente {
    dni: string;
    nombre: string;
    apellidoPate: string;
    apellidoMate:string;
    edad: number;
    fechaNacimiento: Date;
    genero: string;
    fechaRegistro: Date;
    activo: Int8Array;
    dniFamiliar: string;
    nombreFamiliar:string;
    apellidoPateFamiliar:string;
    apellidoMateFamiliar:string;
    telefonoFamiliar:string;
    direccion:string;
    parentesco:string;
  }