/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunicationService } from '@app/services/communication.service';
import { Garden } from '@common/garden';
@Component({
    selector: 'app-garden-edition',
    templateUrl: './garden-edition.component.html',
    styleUrls: ['./garden-edition.component.scss'],
})
export class GardenEditionComponent {
    nameFormControl = new FormControl('', [Validators.required]);
    locationFormControl = new FormControl('', [Validators.required]);
    garden: Garden = {
        id: 1,
        name: '',
        location: '',
        photo: '',
        dimension: '',
        products: [''],
    };

    constructor(
        private communicationService: CommunicationService,
        private router: Router,
    ) {}

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

    trackByFn(index: number): any {
        return index;
    }
    // TODO send to server
    confirm() {
        if (this.garden.name !== '' && this.garden.location !== '') {
            this.communicationService.pushGarden(this.garden).subscribe();
            this.router.navigate(['/profile-page']);
        }
    }
}
