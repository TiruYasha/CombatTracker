import { } from 'jasmine';
import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { EncounterService } from '../shared/encounter.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Observable } from 'rxjs/Observable';
import { Encounter } from '../shared/encounter';

import 'rxjs/add/observable/of';
import { take } from 'rxjs/operators/take';
import { MaterialModule } from '../../material.module';
import { EncounterDetailComponent } from './encounter-detail.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../stubs/activatedroute-stub';

describe('EncounterListComponent', () => {

    let sut: EncounterDetailComponent;
    let fixture: ComponentFixture<EncounterDetailComponent>;
    let encounterService: EncounterService;
    let activatedRoute: ActivatedRoute;

    let encounter: Encounter;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                MaterialModule
            ],
            declarations: [EncounterDetailComponent],
            providers: [
                EncounterService,
                { provide: ActivatedRoute, useClass: ActivatedRouteStub }
            ]
        });

        this.fixture = TestBed.createComponent(EncounterDetailComponent);

        this.sut = this.fixture.componentInstance;
        this.encounterService = this.fixture.debugElement.injector.get(EncounterService);
        this.activatedRoute = this.fixture.debugElement.injector.get(ActivatedRoute);

        this.encounter = {
            id: 1,
            name: 'Goblins'
        };

        this.spy = spyOn(this.encounterService, 'getEncounter')
            .and.returnValue(Observable.of(this.encounter));
    });

    it('ngOninit calls getEncounter() and sets the encounter', fakeAsync(() => {
        this.activatedRoute.testParamMap = { id: this.encounter.id };

        this.sut.ngOnInit();

        expect(this.spy.calls.any()).toBe(true);
        expect(this.sut.encounter).toBe(this.encounter);
    }));
});