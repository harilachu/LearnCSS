import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFlexboxComponent } from './learn-flexbox.component';

describe('LearnFlexboxComponent', () => {
  let component: LearnFlexboxComponent;
  let fixture: ComponentFixture<LearnFlexboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnFlexboxComponent]
    });
    fixture = TestBed.createComponent(LearnFlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
