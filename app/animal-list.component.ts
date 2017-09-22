import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div id="filter">
      <label>Filter by: </label>
      <select (change)="onChange($event.target.value)">
        <option value="allAnimals" selected="selected">All Animals</option>
        <option value="youngAnimals">Young Animals</option>
        <option value="matureAnimas">Mature Animals</option>
      </select>
    </div>

    <table class="table" id="main-table">
      <thead>
        <tr>
          <th>Species</th>
          <th>Name</th>
          <th>Age</th>
          <th>Diet</th>
          <th>Location</th>
          <th>Caretakers</th>
          <th>Sex</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let currentAnimal of childAnimalList | age: filterByAge">
         <th>{{currentAnimal.species}}</th>
         <th>{{currentAnimal.name}}</th>
         <th>{{currentAnimal.age}}</th>
         <th>{{currentAnimal.diet}}</th>
         <th>{{currentAnimal.location}}</th>
         <th>{{currentAnimal.caretakers}}</th>
         <th>{{currentAnimal.sex}}</th>
         <th>{{currentAnimal.likes}}</th>
         <th>{{currentAnimal.dislikes}}</th>
         <th><button class="btn btn-default" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button></th>
       </tr>
     </tbody>
   </table>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSenderEdit = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
  this.clickSenderEdit.emit(animalToEdit);
  }

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
