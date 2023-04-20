import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { Alumno, ApiService } from '../services/api.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  providers: [
    {
      provide: ApiService,
      useFactory: () => {
        return new ApiService('alumnos')
      }
    },
  ],
})
export class AlumnosComponent implements OnInit, OnDestroy {

  alumnos: Alumno[] = [];
  cargando = false;

  miSusbscripcion: Subscription | null = null;

  constructor(private apiService: ApiService) {
    console.log(this.apiService.getById(1));
  }

  ngOnDestroy(): void {
    this.miSusbscripcion?.unsubscribe();
  }

  ngOnInit(): void {
    this.AddAlumnos();
    this.escucharContador();
    this.getAlumnos();
  }


  AddAlumnos(): void {
    this.cargando = true
    this.apiService.getListado().subscribe({
      next: (alumnos) => {
        this.alumnos = alumnos;
      },
      error: (error) => {
        alert(error)
      },
      complete: () => {
        this.cargando = false;
      }
    })
  }

  async getAlumnos() {
    const myPromise = new Promise<Alumno[]>((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            nombre: 'Camila',
            apellido:'Arena',
            promedio:6
          },
          {
            id: 2,
            nombre: 'Lucia',
            apellido:'Velazques',
            promedio:9
          }
        ])
      }, 3000);
    })

    console.log(await myPromise);
  }


  escucharContador() {
    const obs$ = new Observable(
      (observer) => {
        let contador = 1;

        setInterval(() => {
          observer.next(contador++)
          if (contador === 5) {
            observer.complete();
          }
        }, 1000);
      }
    );



    this.miSusbscripcion = obs$.subscribe((val) => console.log(val));

  }

}