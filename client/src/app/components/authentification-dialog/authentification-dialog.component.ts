import { Component } from '@angular/core';
import { UserAuthentificationService } from '@app/services/user-authentification.service';

@Component({
    selector: 'app-authentification-dialog',
    templateUrl: './authentification-dialog.component.html',
    styleUrls: ['./authentification-dialog.component.scss'],
})
export class AuthentificationDialogComponent {
    username: string = '';
    password: string = '';

    constructor(private userService: UserAuthentificationService) {}

    sendAuthentification() {
        this.userService.sendUserInfo(this.username, this.password);
    }
}
