import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <button class="btn btn-success btn-lg" (click)="show=!show">New Keg</button>
    <div *ngIf="show">
      <h1>New Keg</h1>
      <div class="well">
        <table class="table">
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
            </tr>
          </thead>
          <tbody>
            <tr>
            <th>
              <input #newSpecies>
            </th>
              <th>
                <input #newName>
              </th>
              <th>
                <input #newAge>
              </th>
              <th>
                <input #newDiet>
              </th>
              <th>
                <input #newLocation>
              </th>
              <th>
                <input #newCaretakers>
              </th>
              <th>
                <input #newSex>
              </th>
              <th>
                <input #newLikes>
              </th>
              <th>
                <input #newDislikes>
              </th>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-default" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=' '; newName.value=' '; newAge.value=' '; newDiet.value=' '; newLocation.value=' '; newCaretakers.value=' '; newSex.value=' '; newLikes.value=' '; newDislikes.value=' '; show=!show">Add</button>
      </div>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age: number, diet, location, caretakers: number, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
