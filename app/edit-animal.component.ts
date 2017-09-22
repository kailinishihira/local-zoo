import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
       <h1>Edit {{childSelectedAnimal.name}}</h1>
       <div class="well">
       <div class="form-group row">
         <label class="col-md-2 col-form-label">Species</label>
         <div class="col-md-10">
          <input class="form-control" [(ngModel)]="childSelectedAnimal.species">
         </div>
       </div>

       <div class="form-group row">
         <label class="col-md-2 col-form-label">Name</label>
         <div class="col-md-10">
           <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
         </div>
       </div>

       <div class="form-group row">
         <label class="col-md-2 col-form-label">Age</label>
         <div class="col-md-10">
           <input class="form-control" [(ngModel)]="childSelectedAnimal.age">
         </div>
       </div>

       <div class="form-group row">
         <label class="col-md-2 col-form-label">Diet</label>
         <div class="col-md-10">
           <input class="form-control" [(ngModel)]="childSelectedAnimal.diet">
         </div>
       </div>

       <div class="form-group row">
         <label class="col-md-2 col-form-label">Location</label>
         <div class="col-md-10">
           <input class="form-control" [(ngModel)]="childSelectedAnimal.location">
         </div>
       </div>

       <div class="form-group row">
         <label class="col-md-2 col-form-label">Caretakers</label>
         <div class="col-md-10">
           <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
         </div>
       </div>

       <div class="form-group row">
         <label class="col-md-2 col-form-label">Sex</label>
         <div class="col-md-10">
           <input class="form-control" [(ngModel)]="childSelectedAnimal.sex">
         </div>
       </div>

       <div class="form-group row">
         <label class="col-md-2 col-form-label">Likes</label>
         <div class="col-md-10">
           <input class="form-control" [(ngModel)]="childSelectedAnimal.likes">
         </div>
       </div>

       <div class="form-group row">
         <label class="col-md-2 col-form-label">Dislikes</label>
         <div class="col-md-10">
           <input class="form-control" [(ngModel)]="childSelectedAnimal.dislikes">
         </div>
       </div>
       <button class="btn btn-default btn-lg" (click)="doneButtonClicked()">Done</button>
     </div>
   </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
