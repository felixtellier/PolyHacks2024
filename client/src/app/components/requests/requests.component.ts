import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlertDialogComponent } from '@app/components/alert-dialog/alert-dialog.component';
import { InRequest, OutRequest } from '@common/request';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
    outColumns: string[] = ['etat', 'jardin', 'utilisateur'];
    inColumns: string[] = ['jardin', 'utilisateur', 'nbSac', 'reponse'];
    emptyOutRequest: OutRequest[] = [];
    emptyInRequest: InRequest[] = [];
    outRequests: OutRequest[] = [
        {
            state: 'Accepté',
            garden: 'Le jardin des Lemay',
            user: 'Robert',
            nBags: 1,
        },
        {
            state: 'En attente',
            garden: 'Le jardin des Foulem',
            user: 'Olivier',
            nBags: 2,
        },
        {
            state: 'Refusé',
            garden: 'Le jardin de fraises',
            user: 'Remi',
            nBags: 5,
        },
    ];
    inRequests: InRequest[] = [
        {
            garden: 'Jardin de tomates',
            user: 'user4',
            nBags: 3,
            accepted: '',
        },
        {
            garden: 'Le jardin des Tellier',
            user: 'Amelie',
            nBags: 1,
            accepted: '',
        },
        {
            garden: 'Garden123',
            user: 'Kanye',
            nBags: 2,
            accepted: '',
        },
    ];

    inDataSource: MatTableDataSource<InRequest> = new MatTableDataSource(this.emptyInRequest);
    outDataSource: MatTableDataSource<OutRequest> = new MatTableDataSource(this.emptyOutRequest);

    constructor(private dialog: MatDialog) {}

    ngOnInit(): void {
        this.outDataSource.data = this.outRequests;
        this.inDataSource.data = this.inRequests;
    }

    onSubmit(): void {
        // window.alert('Votre reponse a ete envoyer');
        this.dialog.open(AlertDialogComponent, {});
    }
}
