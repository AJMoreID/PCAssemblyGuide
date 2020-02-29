import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuSelectionComponent } from './cpu-selection.component';

describe('CpuSelectionComponent', () => {
  let component: CpuSelectionComponent;
  let fixture: ComponentFixture<CpuSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
