import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosMockService {

  constructor() { }

  getAlumnos() {
    return [
      {
        id: 1,
        nombre: 'Usuario falso',
      },
    ];
  }
}