import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthentificationDialogComponent } from '@app/components/authentification-dialog/authentification-dialog.component';
import { UserAuthentificationService } from '@app/services/user-authentification.service';
@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
    constructor(
        private router: Router,
        private userService: UserAuthentificationService,
        private dialog: MatDialog,
    ) {}
    goToProfile() {
        if (this.userService.isLog) {
            this.router.navigate(['/profile-page']);
        } else {
            this.dialog.open(AuthentificationDialogComponent);
        }
    }

    goToHome() {
        this.router.navigate(['/home']);
    }
}
