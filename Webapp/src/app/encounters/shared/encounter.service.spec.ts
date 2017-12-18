import { EncounterService } from './encounter.service';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Encounter } from './encounter';

describe('Service: EncounterService', () => {
    let sut: EncounterService;
    let http: HttpClient;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                EncounterService
            ]
        });
    });

    beforeEach(inject([HttpClient, HttpTestingController, EncounterService],
        (http: HttpClient, httpMock: HttpTestingController, sut: EncounterService) => {
            this.sut = sut;
            this.http = http;
            this.httpMock = httpMock;
        }));

    it('getEncounters() expects a get request and returns encounters', () => {
        const encountersData: Encounter[] = [
            {
                id: 1,
                name: 'Goblins'
            },
            {
                id: 2,
                name: 'Kobolds'
            }
        ];

        this.sut.getEncounters().subscribe((encounters: Encounter[]) => {
            expect(encounters).toEqual(encountersData);
        });

        const req = this.httpMock.expectOne('encounters');

        expect(req.request.method).toEqual('GET');

        req.flush(encountersData);

        this.httpMock.verify();
    });

    it('getEncounter(id) expects a get request and returns a encounter', () => {
        const encountersData: Encounter = { id: 1, name: 'Goblins' };

        this.sut.getEncounter(1).subscribe((encounter: Encounter) => {
            expect(encounter).toEqual(encounter);
        });

        const req = this.httpMock.expectOne('encounter/1');

        expect(req.request.method).toEqual('GET');

        req.flush(encountersData);

        this.httpMock.verify();
    });
});