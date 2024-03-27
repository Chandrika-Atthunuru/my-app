import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserFormExComponent } from './create-user-form-ex.component';

describe('CreateUserFormExComponent', () => {
  let component: CreateUserFormExComponent;
  let fixture: ComponentFixture<CreateUserFormExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserFormExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserFormExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
