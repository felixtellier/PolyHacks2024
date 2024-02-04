import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '@app/services/communication.service';
import { Garden } from '@common/garden';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-garden-container',
    templateUrl: './garden-container.component.html',
    styleUrls: ['./garden-container.component.scss'],
})
export class GardenContainerComponent implements OnInit {
    readonly gardens: BehaviorSubject<Garden[]> = new BehaviorSubject<Garden[]>([]);

    constructor(private readonly communicationService: CommunicationService) {}

    ngOnInit(): void {
        this.communicationService.getAllGardens().subscribe(this.gardens);
    }
}
