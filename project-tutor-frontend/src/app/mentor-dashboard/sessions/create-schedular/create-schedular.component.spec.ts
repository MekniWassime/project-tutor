import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchedularComponent } from './create-schedular.component';

describe('CreateSchedularComponent', () => {
  let component: CreateSchedularComponent;
  let fixture: ComponentFixture<CreateSchedularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSchedularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSchedularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
