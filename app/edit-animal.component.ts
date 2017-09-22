import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
       <h1>Edit {{childSelectedAnimal.name}}</h1>
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
                 <input [(ngModel)]="childSelectedAnimal.species">
               </th>
               <th>
                 <input [(ngModel)]="childSelectedAnimal.name">
               </th>
               <th>
                 <input [(ngModel)]="childSelectedAnimal.age">
               </th>
               <th>
                 <input [(ngModel)]="childSelectedAnimal.diet">
               </th>
               <th>
                 <input [(ngModel)]="childSelectedAnimal.location">
               </th>
               <th>
                 <input [(ngModel)]="childSelectedAnimal.caretakers">
               </th>
               <th>
                 <input [(ngModel)]="childSelectedAnimal.sex">
               </th>
               <th>
                 <input [(ngModel)]="childSelectedAnimal.likes">
               </th>
               <th>
                 <input [(ngModel)]="childSelectedAnimal.dislikes">
               </th>
             </tr>
           </tbody>
         </table>
         <button class="btn btn-default" (click)="doneButtonClicked()">Done</button>
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
