import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnCssComponent } from './learn-css.component';



@NgModule({
  declarations: [
    LearnCssComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LearnCssComponent
  ]
})
export class LearnCssModule { }
