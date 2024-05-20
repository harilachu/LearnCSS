import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnCssComponent } from './learn-css.component';

describe('LearnCssComponent', () => {
  let component: LearnCssComponent;
  let fixture: ComponentFixture<LearnCssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnCssComponent]
    });
    fixture = TestBed.createComponent(LearnCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
