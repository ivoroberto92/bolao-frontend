import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessReadComponent } from './guess-read.component';

describe('GuessReadComponent', () => {
  let component: GuessReadComponent;
  let fixture: ComponentFixture<GuessReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
