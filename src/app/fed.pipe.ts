import { Pipe, PipeTransform } from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: 'fed'
})
export class FedPipe implements PipeTransform {

  transform(input: Animal[], animalFed: boolean) {
    if (animalFed === false) return members;
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: 'age'

})
export class AgePipe implements PipeTransform {
  transform(input: Animal[], desiredAge) {
    var output: Animal[] = [];
    if(desiredAge === "youngAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "oldAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
