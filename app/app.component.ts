import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
      <h1 id="title">{{title}}</h1>

      <animal-list [childAnimalList]="masterAnimalList" (clickSenderEdit)="editAnimal($event)"></animal-list>

      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>

      <edit-animal [childSelectedAnimal]="selectedEditAnimal" (doneButtonClickedSender)="finishedEdit()"></edit-animal>

    </div>
  `
})

export class AppComponent {
  title: string = 'Local Zoo';
  selectedEditAnimal: null;

  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox','Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Prince', 1, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises'),
    new Animal('Red Panda', 'Momo', 1.5, 'Herbivore', 'Northern Trail' 5, 'Female', 'Sleeping on tree branches', 'Too much sunshine')
  ];

  editAnimal(clickedAnimal) {
   this.selectedEditAnimal = clickedAnimal;
  }

  finishedEdit() {
   this.selectedEditAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }



}
