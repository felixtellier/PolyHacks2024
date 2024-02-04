import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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

    constructor(
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
    ) {}

    openDialog() {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, { data: this.garden });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.snackBar.open('Demande envoyé avec succès', '', { duration: 3000 });
            }
        });
    }
}
