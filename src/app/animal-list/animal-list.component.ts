import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

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

  difficultyColor(currentAnimal){
    if (currentAnimal.difficulty === 3){
      return "bg-danger";
    } else if (currentAnimal.difficulty === 2) {
      return  "bg-warning";
    } else {
      return "bg-success";
    }
  }

  haveCooked(clickedAnimal: Animal) {
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
