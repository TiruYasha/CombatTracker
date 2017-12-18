import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncounterService } from '../shared/encounter.service';
import { Encounter } from '../shared/encounter';

@Component({
    selector: 'combat-encounter-detail',
    templateUrl: './encounter-detail.component.html',
    styleUrls: ['./encounter-detail.component.css']
})
export class EncounterDetailComponent implements OnInit {

    encounter: Encounter;

    constructor(private route: ActivatedRoute, private encounterService: EncounterService) { }

    ngOnInit() {
        this.route.paramMap.subscribe(p => this.getEncounter(p.has('id') && p.get('id')));
    }

    getEncounter(id): void {
        this.encounterService.getEncounter(id)
            .subscribe(encounter => this.encounter = encounter);
    }
}