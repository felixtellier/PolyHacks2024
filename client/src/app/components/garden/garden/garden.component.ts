import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '@app/components/confirmation-dialog/confirmation-dialog.component';
import { Garden } from '@common/garden';
@Component({
    selector: 'app-garden',
    templateUrl: './garden.component.html',
    styleUrls: ['./garden.component.scss'],
})
export class GardenComponent {
    @Input() garden: Garden;
    @Input() isProfile?: boolean;
    @Input() srcImage: string;

    constructor(
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
        private router: Router,
    ) {}

    openDialog() {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, { data: this.garden });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.snackBar.open('Demande envoyé avec succès', '', { duration: 3000 });
            }
        });
    }
    edit() {
        this.router.navigate(['/garden-creation', this.garden.id]);
    }
}
