import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthButtonComponentComponent } from './auth-button-component.component';

describe('AuthButtonComponentComponent', () => {
  let component: AuthButtonComponentComponent;
  let fixture: ComponentFixture<AuthButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthButtonComponentComponent]
    });
    fixture = TestBed.createComponent(AuthButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
