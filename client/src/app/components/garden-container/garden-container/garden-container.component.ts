import { Component, OnInit } from '@angular/core';
import { Garden } from '@common/garden';

@Component({
    selector: 'app-garden-container',
    templateUrl: './garden-container.component.html',
    styleUrls: ['./garden-container.component.scss'],
})
export class GardenContainerComponent implements OnInit {
    gardens: Garden[];

    ngOnInit(): void {
        this.gardens = [
            {
                id: 1,
                name: 'Test',
                location: '2024 rue de bucarest',
                photo: '1',
                dimension: '40',
                products: ['carrot', 'patate'],
            },
            {
                id: 1,
                name: 'Test',
                location: '2024 rue de bucarest',
                photo: '1',
                dimension: '40',
                products: ['carrot', 'patate'],
            },
            {
                id: 1,
                name: 'Test',
                location: '2024 rue de bucarest',
                photo: '1',
                dimension: '40',
                products: ['carrot', 'patate'],
            },
            {
                id: 1,
                name: 'Test',
                location: '2024 rue de bucarest',
                photo: '1',
                dimension: '40',
                products: ['carrot', 'patate'],
            },
        ];
    }
}
