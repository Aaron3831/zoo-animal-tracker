import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})

export class EditAnimalComponent implements OnInit {
  @Input() childSelectedAnimal: Animal;
  @Output() fedButtonClickedSender = new EventEmitter();

  fedButtonClicked() {
    this.fedButtonClickedSender.emit();
  }

  haveFed(clickedAnimal: Animal) {
    console.log(clickedAnimal)
   if(clickedAnimal.fed === true) {
     alert("This animal has been fed!");
   } else {
     alert("This animal has not been tried, please feed it!");
   }
  }

  public fedStatus = [
    {value: true, display: 'fed'},
    {value: false, display: 'not fed yet'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
