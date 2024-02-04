import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { InRequest, OutRequest } from '@common/request';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
    outColumns: string[] = ['etat', 'jardin', 'utilisateur'];
    inColumns: string[] = ['jardin', 'utilisateur'];
    emptyOutRequest: OutRequest[] = [];
    emptyInRequest: InRequest[] = [];
    outRequests: OutRequest[] = [
        {
            state: 'Accepté',
            garden: 'Le jardin des Lemay',
            user: 'Robert',
        },
        {
            state: 'En attente',
            garden: 'Le jardin des Foulem',
            user: 'Olivier',
        },
        {
            state: 'Refusé',
            garden: 'Le jardin de fraises',
            user: 'Remi',
        },
    ];
    inRequests: InRequest[] = [
        {
            garden: 'Jardin de tomates',
            user: 'user4',
        },
        {
            garden: 'Le jardin des Tellier',
            user: 'Amelie',
        },
        {
            garden: 'Garden123',
            user: 'Kanye',
        },
    ];

    inDataSource: MatTableDataSource<InRequest> = new MatTableDataSource(this.emptyInRequest);
    outDataSource: MatTableDataSource<OutRequest> = new MatTableDataSource(this.emptyOutRequest);

    ngOnInit(): void {
        this.outDataSource.data = this.outRequests;
        this.inDataSource.data = this.inRequests;
    }

    // private getRequests(): void {
    //   this.requests = this.communicationService.getRequests();
    // }
}
