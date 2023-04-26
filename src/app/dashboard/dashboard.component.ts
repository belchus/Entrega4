import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../models/alumnos.model';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {

authUser:Usuario | null=null;
 
miSusbscripcionObs$: Observable<Usuario | null>;

suscripcionAuthUser:Subscription | null = null;

destroyed$ = new Subject<void>();

  constructor(private authService:AuthService){
    this.miSusbscripcionObs$ = this.authService.obtenerUsuarioAutenticado()
this.authService.obtenerUsuarioAutenticado()
.pipe(
  takeUntil(this.destroyed$)
)
    .subscribe((usuario)=>  this.authUser=usuario);
  }
  ngOnDestroy():void{
    //this.suscripcionAuthUser?.unsubscribe();
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
