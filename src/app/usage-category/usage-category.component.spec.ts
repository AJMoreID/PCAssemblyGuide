import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageCategoryComponent } from './usage-category.component';

describe('UsageCategoryComponent', () => {
  let component: UsageCategoryComponent;
  let fixture: ComponentFixture<UsageCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
