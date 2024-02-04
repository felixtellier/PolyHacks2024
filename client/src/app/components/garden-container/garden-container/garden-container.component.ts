import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '@app/services/communication.service';
import { Garden } from '@common/garden';

@Component({
    selector: 'app-garden-container',
    templateUrl: './garden-container.component.html',
    styleUrls: ['./garden-container.component.scss'],
})
export class GardenContainerComponent implements OnInit {
    filteredGardens: Garden[] = [];
    value: string = '';
    readonly srcImages: string[] = [
        './assets/img/gardens/garden1.jpg',
        './assets/img/gardens/garden2.jpg',
        './assets/img/gardens/garden3.jpg',
        './assets/img/gardens/garden4.jpg',
        './assets/img/gardens/garden5.jpg',
        './assets/img/gardens/garden6.jpg',
        './assets/img/gardens/garden7.jpg',
        './assets/img/gardens/garden8.jpg',
    ];

    private gardens: Garden[] = [];

    constructor(private readonly communicationService: CommunicationService) {}

    ngOnInit(): void {
        this.communicationService.getAllGardens().subscribe((result) => {
            this.gardens = result;
            this.filteredGardens = this.gardens;
        });
    }

    filterList() {
        this.filteredGardens = this.gardens.filter((garden) => {
            return garden.name.toUpperCase().includes(this.value.toUpperCase());
        });
    }
}
