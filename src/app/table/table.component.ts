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
    new Alumnos(1, 'Camila', 'Arena', 'camiarena@mail.com', 1636541,new Date("2023-03-15")),
    new Alumnos(2, 'Belen', 'Coder', 'belucoder@mail.com', 6261540,new Date("2023-03-20")),
    new Alumnos(3, 'Lucas', 'Linos', 'lucaslinos@mail.com', 1613639,new Date("2023-03-20")),
    new Alumnos(4, 'Bruno', 'Diaz', 'brunodiaz@mail.com', 2031745,new Date("2023-03-29")),
    new Alumnos(5, 'Rocio', 'Urquiza', 'rociourqu@mail.com', 9652145,new Date("2023-03-28")),
  ];
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false
    }, 2000);
  }
}