import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <button class="btn btn-default btn-lg" (click)="show=!show">New Animal</button>
    <div *ngIf="show">
      <h1>New Animal</h1>
      <div class="well">
        <form>
          <div class="form-group row">
            <label class="col-md-2 col-form-label">Species</label>
            <div class="col-md-10">
              <input class="form-control" #newSpecies>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-2 col-form-label">Name</label>
            <div class="col-md-10">
              <input class="form-control" #newName>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-2 col-form-label">Age</label>
            <div class="col-md-10">
              <input class="form-control" #newAge>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-2 col-form-label">Diet</label>
            <div class="col-md-10">
              <input class="form-control" #newDiet>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-2 col-form-label">Location</label>
            <div class="col-md-10">
              <input class="form-control" #newLocation>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-2 col-form-label">Caretakers</label>
            <div class="col-md-10">
              <input class="form-control" #newCaretakers>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-2 col-form-label">Sex</label>
            <div class="col-md-10">
              <input class="form-control" #newSex>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-2 col-form-label">Likes</label>
            <div class="col-md-10">
              <input class="form-control" #newLikes>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-2 col-form-label">Dislikes</label>
            <div class="col-md-10">
              <input class="form-control" #newDislikes>
            </div>
          </div>

            <button class="btn btn-default" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=' '; newName.value=' '; newAge.value=' '; newDiet.value=' '; newLocation.value=' '; newCaretakers.value=' '; newSex.value=' '; newLikes.value=' '; newDislikes.value=' '; show=!show">Add</button>
        </form>
      </div>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
