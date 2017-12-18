import { Component, OnInit } from '@angular/core';
import { EncounterService } from '../shared/encounter.service';
import { Encounter } from '../shared/encounter';

@Component({
    selector: 'combat-encounter-list',
    templateUrl: './encounter-list.component.html',
    styleUrls: ['./encounter-list.component.css']
})
export class EncounterListComponent implements OnInit {
    encounters: Encounter[];

    constructor(private encounterService: EncounterService) { }

    ngOnInit() {
        this.encounterService.getEncounters()
            .subscribe((encounters) => {
                this.encounters = encounters;
                console.log(encounters);
            });
     }
}