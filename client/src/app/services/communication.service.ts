import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Garden } from '@common/garden';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CommunicationService {
    private readonly baseUrl: string = environment.serverUrl;

    constructor(private readonly http: HttpClient) {}

    getAllGardens(): Observable<Garden[]> {
        return this.http.get<Garden[]>(`${this.baseUrl}/garden`).pipe(catchError(this.handleError<Garden[]>('GetGardens')));
    }

    pushGarden(garden: Garden): Observable<Garden> {
        return this.http.put<Garden>(`${this.baseUrl}/garden`, garden).pipe(catchError(this.handleError<Garden>('PushGarden')));
    }

    private handleError<T>(request: string, result?: T): (error: Error) => Observable<T> {
        return () => of(result as T);
    }
}
