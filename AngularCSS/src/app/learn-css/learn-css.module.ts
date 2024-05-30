import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnCssComponent } from './learn-css.component';
import { LearnFlexboxComponent } from '../learn-flexbox/learn-flexbox.component';



@NgModule({
  declarations: [
    LearnCssComponent,
    LearnFlexboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LearnCssComponent,
    LearnFlexboxComponent
  ]
})
export class LearnCssModule { }
