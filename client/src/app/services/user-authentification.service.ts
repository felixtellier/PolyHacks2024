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
                // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                this.isLog = response.status === 200;
                if (response.body) this.user = response.body[0];
                // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                return response.status === 200;
            },
        });
    }
}
