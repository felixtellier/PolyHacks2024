import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommunicationService } from '@app/services/communication.service';
import { Garden } from '@common/garden';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
    numberOfBag = 1;
    constructor(
        private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
        private communicationService: CommunicationService,
        @Inject(MAT_DIALOG_DATA) public garden: Garden,
    ) {}

    sendBag() {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        if (this.numberOfBag < 0 || this.numberOfBag > 31) {
            this.dialogRef.close(false);
            return;
        }
        this.communicationService.sendRequest(this.garden.id);
        this.dialogRef.close(true);
    }
}
