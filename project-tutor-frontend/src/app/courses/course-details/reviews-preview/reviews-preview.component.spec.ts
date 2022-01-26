import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsPreviewComponent } from './reviews-preview.component';

describe('ReviewsPreviewComponent', () => {
  let component: ReviewsPreviewComponent;
  let fixture: ComponentFixture<ReviewsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
