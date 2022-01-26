import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressMapPreviewComponent } from './adress-map-preview.component';

describe('AdressMapPreviewComponent', () => {
  let component: AdressMapPreviewComponent;
  let fixture: ComponentFixture<AdressMapPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressMapPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressMapPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
