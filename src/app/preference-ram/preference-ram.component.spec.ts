import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceRamComponent } from './preference-ram.component';

describe('PreferenceRamComponent', () => {
  let component: PreferenceRamComponent;
  let fixture: ComponentFixture<PreferenceRamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceRamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
