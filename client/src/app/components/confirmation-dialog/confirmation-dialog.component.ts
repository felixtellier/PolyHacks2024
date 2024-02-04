import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Garden } from '@common/garden';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
    numberOfBag = 1;
    constructor(@Inject(MAT_DIALOG_DATA) public garden: Garden) {}

    sendBag() {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        if (this.numberOfBag < 0 || this.numberOfBag > 31) return;
    }
}
