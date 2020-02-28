import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceCpuComponent } from './preference-cpu.component';

describe('PreferenceCpuComponent', () => {
  let component: PreferenceCpuComponent;
  let fixture: ComponentFixture<PreferenceCpuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceCpuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceCpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
