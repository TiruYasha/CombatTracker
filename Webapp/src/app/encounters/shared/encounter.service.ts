import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Encounter } from './encounter';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class EncounterService {

    constructor(private http: HttpClient) { }

    getEncounters(): Observable<Encounter> {
        return this.http.get<Encounter[]>('/api/encounters')
            .pipe(
            tap(encounters => console.log(encounters)),
            catchError(this.handleError('getEncounters', null))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}