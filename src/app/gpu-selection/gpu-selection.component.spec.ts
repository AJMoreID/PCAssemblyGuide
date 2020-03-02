import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuSelectionComponent } from './gpu-selection.component';

describe('GpuSelectionComponent', () => {
  let component: GpuSelectionComponent;
  let fixture: ComponentFixture<GpuSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpuSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
