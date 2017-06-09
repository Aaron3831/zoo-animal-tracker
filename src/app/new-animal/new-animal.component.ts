import { Component, Output, EventEmitter, OnInit  } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})

export class NewAnimalComponent implements OnInit{
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakeramount: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakeramount, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);

  }

  constructor() { }

  ngOnInit() {
  }
}
