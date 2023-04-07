export class Alumnos {
    constructor(
      public id: number,
      public firstName: string| null,
      public lastName: string| null,
      public email: string| null,
     public number: number| null,
     public fechaDeEntregable: Date| null,
     public  promedio: number| null,
    ) {}
  }