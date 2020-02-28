import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceGpuComponent } from './preference-gpu.component';

describe('PreferenceGpuComponent', () => {
  let component: PreferenceGpuComponent;
  let fixture: ComponentFixture<PreferenceGpuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceGpuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceGpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
