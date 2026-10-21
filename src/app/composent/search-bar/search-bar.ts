import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar {
   faMagnifyingGlass = faMagnifyingGlass
@Input() autos: Auto[] = []

@Output() onselectCar = new EventEmitter<Auto>();

selectedAutos: Auto[]= []
selectAutos(selectdebrand: string){
     if(selectdebrand){
       this.selectedAutos=this.autos.filter(
         x=>x.brand.toLowerCase().startsWith(selectdebrand.toLowerCase()))
       }
     else
       this.selectedAutos=this.autos
     }

  selectCar(auto: Auto){
    this.onselectCar.emit(auto)

  }
}

