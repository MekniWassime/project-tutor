import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesItemsGridComponent } from './courses-items-grid.component';

describe('CoursesItemsGridComponent', () => {
  let component: CoursesItemsGridComponent;
  let fixture: ComponentFixture<CoursesItemsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesItemsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesItemsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
