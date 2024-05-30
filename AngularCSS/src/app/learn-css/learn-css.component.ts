import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-css',
  templateUrl: './learn-css.component.html',
  styleUrls: ['./learn-css.component.css']
})
export class LearnCssComponent {

loadFlexBox: boolean = false;


LoadFlexboxComponent() {
  this.loadFlexBox = !this.loadFlexBox;
}

}
