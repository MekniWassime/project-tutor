import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedularCardComponent } from './schedular-card.component';

describe('SchedularCardComponent', () => {
  let component: SchedularCardComponent;
  let fixture: ComponentFixture<SchedularCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedularCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedularCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
