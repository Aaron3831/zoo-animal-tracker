import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public fed: string = 'false';
  masterAnimalList: Animal[] = [
    new Animal('Snake', 'Solid', 7, 'Carnivore', 'Tropical Rain Forest Building', 2, 'Male', 'Warm Rocks', 'Cold Weather'),
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Revolver', 1, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based')
  ];

  selectedAnimal = null;

  editAnimal(currentAnimal) {
    this.selectedAnimal = currentAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
