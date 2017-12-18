import {} from 'jasmine';
import { EncounterListComponent } from './encounter-list.component';
import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { EncounterService } from '../shared/encounter.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Observable } from 'rxjs/Observable';
import { Encounter } from '../shared/encounter';

import 'rxjs/add/observable/of';
import { take } from 'rxjs/operators/take';
import { MaterialModule } from '../../material.module';

describe('EncounterListComponent', () => {

    let sut: EncounterListComponent;
    let fixture: ComponentFixture<EncounterListComponent>;
    let encounterService: EncounterService;

    let encounters: Encounter[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule,
                MaterialModule],
            declarations: [EncounterListComponent],
            providers: [EncounterService]
        });

        this.fixture = TestBed.createComponent(EncounterListComponent);

        this.sut = this.fixture.componentInstance;
        this.encounterService = this.fixture.debugElement.injector.get(EncounterService);

        this.encounters = [
            {
                id: 1,
                name: 'Goblins'
            },
            {
                id: 1,
                name: 'Kobolds'
            }
        ];

        this.spy = spyOn(this.encounterService, 'getEncounters')
            .and.returnValue(Observable.of(this.encounters));
    });

    it('ngOninit calls getEncounters()', () => {
        this.sut.ngOnInit();
        expect(this.spy.calls.any()).toBe(true);
    });

    it('should set encounters after getEncounters Observable (async)', fakeAsync(() => {
        this.fixture.detectChanges();
        tick();
        this.fixture.detectChanges();
        expect(this.sut.encounters).toBe(this.encounters);
    }));
});