import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedularListComponent } from './schedular-list.component';

describe('SchedularListComponent', () => {
  let component: SchedularListComponent;
  let fixture: ComponentFixture<SchedularListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedularListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
