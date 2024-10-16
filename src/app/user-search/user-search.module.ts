import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserSearchComponent } from './user-search.component';



@NgModule({
  declarations: [
    UserSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UserSearchComponent
  ],
})
export class UserSearchModule { }
