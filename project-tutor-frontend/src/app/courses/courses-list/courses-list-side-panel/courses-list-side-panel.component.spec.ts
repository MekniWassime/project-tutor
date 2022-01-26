import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListSidePanelComponent } from './courses-list-side-panel.component';

describe('CoursesListSidePanelComponent', () => {
  let component: CoursesListSidePanelComponent;
  let fixture: ComponentFixture<CoursesListSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListSidePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
