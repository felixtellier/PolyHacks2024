import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationDialogComponent } from './authentification-dialog.component';

describe('AuthentificationDialogComponent', () => {
  let component: AuthentificationDialogComponent;
  let fixture: ComponentFixture<AuthentificationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthentificationDialogComponent]
    });
    fixture = TestBed.createComponent(AuthentificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
