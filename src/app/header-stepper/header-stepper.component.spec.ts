import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStepperComponent } from './header-stepper.component';

describe('HeaderStepperComponent', () => {
  let component: HeaderStepperComponent;
  let fixture: ComponentFixture<HeaderStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
