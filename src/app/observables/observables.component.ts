import { Component, OnInit } from '@angular/core';
import { Subject, from } from 'rxjs';
import { Alumno } from '../services/api.service';
import {Usuario} from '../models/alumnos.model'
import { FormControl,FormGroup } from '@angular/forms';
import { NotificationsService } from '../services/notifications.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit{

  
isLoggedIn=new Subject<Usuario>();

emailControl = new FormControl();

nombreControl = new FormControl();

authForm=new FormGroup({
email:this.emailControl,
nombre:this.nombreControl,
 })


constructor(private notificationService: NotificationsService){}
async ngOnInit():Promise<void>{
  this.escucharLoggedIn()
    const obtenerUsuario = new Promise((resolve,reject) => {
      resolve({
        id:1,
        nombre:'Lucas'
      })
    });
    
    obtenerUsuario.then((valor)=> console.log(valor));
  const obs$=from (obtenerUsuario)
  obs$
   .pipe(
    
   )
   .subscribe((valor)=> console.log(valor))
  }
 crearUsuario():void{
  this.notificationService.mostrarMensaje('el usuario fue creado')
 }

escucharLoggedIn():void{
  this.isLoggedIn.subscribe((valor)=> console.log(valor));
}
login():void{
 console.log(this.authForm.value);

  this.authService.login({
  ...(this.authForm.value as any),
  id:54,

})
}
}
