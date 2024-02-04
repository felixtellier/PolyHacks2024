import { Component, Input } from '@angular/core';
import { Garden } from '@common/garden';

@Component({
    selector: 'app-garden',
    templateUrl: './garden.component.html',
    styleUrls: ['./garden.component.scss'],
})
export class GardenComponent {
    @Input() garden: Garden;
}
