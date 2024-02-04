/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { CommunicationService } from '@app/services/communication.service';
import { Garden } from '@common/garden';
@Component({
    selector: 'app-garden-edition',
    templateUrl: './garden-edition.component.html',
    styleUrls: ['./garden-edition.component.scss'],
})
export class GardenEditionComponent {
    garden: Garden = {
        id: 1,
        name: '',
        location: '',
        photo: '',
        dimension: '',
        products: [''],
    };

    constructor(private communicationService: CommunicationService) {}

    // TODO get unique id
    setUniqueId() {}

    saveGarden(garden: Garden) {
        console.log(garden);
    }

    handleFileInput(event: any): void {
        const file = event.target.files[0];

        if (file) {
            // Use FileReader to read the selected image and set it as the garden photo
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.garden.photo = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    // TODO send to server
    confirm() {
        this.communicationService.pushGarden(this.garden).subscribe();
        console.log(this.garden);
    }
}
