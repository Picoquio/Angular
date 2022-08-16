import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  
  erased: string  = ''
  
  bool: boolean = false

  borrarHeroe() {
    this.erased = this.heroes.pop() || ''
  }
  
}
