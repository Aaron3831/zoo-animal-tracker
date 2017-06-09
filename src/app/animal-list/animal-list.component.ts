import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: `./animal-list.component.html`
})

export class AnimalListComponent implements OnInit{
   @Input() childAnimalList: Animal[];
   @Output() clickSender = new EventEmitter();

   editButtonHasBeenClicked(currentAnimal: Animal) {
       this.clickSender.emit(currentAnimal);
     }

  filterByAge: string = "youngAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
  haveFed(clickedAnimal: Animal) {
    console.log(clickedAnimal)
   if(clickedAnimal.fed === true) {
     alert("This animal has been fed!");
   } else {
     alert("This animal has not been fed today, go get some food!");
   }
 }


   constructor() { }

   ngOnInit() {
   }
}
