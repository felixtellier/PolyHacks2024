import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenEditionComponent } from './garden-edition.component';

describe('GardenEditionComponent', () => {
    let component: GardenEditionComponent;
    let fixture: ComponentFixture<GardenEditionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [GardenEditionComponent],
        });
        fixture = TestBed.createComponent(GardenEditionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
