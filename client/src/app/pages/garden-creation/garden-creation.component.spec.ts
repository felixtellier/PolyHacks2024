import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenCreationComponent } from './garden-creation.component';

describe('GardenCreationComponent', () => {
  let component: GardenCreationComponent;
  let fixture: ComponentFixture<GardenCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GardenCreationComponent]
    });
    fixture = TestBed.createComponent(GardenCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
