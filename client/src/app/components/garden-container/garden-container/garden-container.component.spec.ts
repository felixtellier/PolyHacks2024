import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenContainerComponent } from './garden-container.component';

describe('GardenContainerComponent', () => {
  let component: GardenContainerComponent;
  let fixture: ComponentFixture<GardenContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GardenContainerComponent]
    });
    fixture = TestBed.createComponent(GardenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
