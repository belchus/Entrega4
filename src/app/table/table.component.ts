import { Component,OnInit  } from '@angular/core';
import { Alumnos } from 'src/app/models/alumnos.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  implements OnInit{
  isLoading: boolean = true;
  title = 'arrays';
  public alumnos: Alumnos[]=[
    new Alumnos(1, 'Camila', 'Arena', 'camiarena@mail.com'),
    new Alumnos(2, 'Belen', 'Coder', 'belucoder@mail.com'),
    new Alumnos(3, 'Lucas', 'Linos', 'lucaslinos@mail.com'),
    new Alumnos(4, 'Bruno', 'Diaz', 'brunodiaz@mail.com'),
    new Alumnos(5, 'Rocio', 'Urquiza', 'rociourqu@mail.com'),
  ];
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false
    }, 2000);
  }
}