import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Garden } from '@common/garden';
@Component({
    selector: 'app-garden',
    templateUrl: './garden.component.html',
    styleUrls: ['./garden.component.scss'],
})
export class GardenComponent {
    @Input() garden: Garden;
    @Input() isProfile?: boolean;
    constructor(private router: Router) {}
    edit() {
        this.router.navigate(['/garden-creation', this.garden.id]);
    }
    @Input() srcImage: string;
}
