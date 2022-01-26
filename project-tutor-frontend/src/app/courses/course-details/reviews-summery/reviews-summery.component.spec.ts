import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsSummeryComponent } from './reviews-summery.component';

describe('ReviewsSummeryComponent', () => {
  let component: ReviewsSummeryComponent;
  let fixture: ComponentFixture<ReviewsSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsSummeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
