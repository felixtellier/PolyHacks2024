import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '@app/components/confirmation-dialog/confirmation-dialog.component';
import { Garden } from '@common/garden';

@Component({
    selector: 'app-garden',
    templateUrl: './garden.component.html',
    styleUrls: ['./garden.component.scss'],
})
export class GardenComponent {
    @Input() garden: Garden;
    @Input() srcImage: string;

    constructor(private dialog: MatDialog) {}

    openDialog() {
        this.dialog.open(ConfirmationDialogComponent, { data: this.garden });
    }
}
