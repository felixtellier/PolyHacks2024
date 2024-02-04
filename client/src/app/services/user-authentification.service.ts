import { Injectable } from '@angular/core';
import { User } from '@common/user';
import { CommunicationService } from './communication.service';

@Injectable({
    providedIn: 'root',
})
export class UserAuthentificationService {
    isLog: boolean = false;
    user: User;
    constructor(private communicationService: CommunicationService) {}

    sendUserInfo(username: string, password: string) {
        this.communicationService.postUser(username, password).subscribe({
            next: (response) => {
                this.user = response;
                this.isLog = true;
            },
        });
    }
}
