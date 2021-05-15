import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessCreateComponent } from './guess-create.component';

describe('GuessCreateComponent', () => {
  let component: GuessCreateComponent;
  let fixture: ComponentFixture<GuessCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
