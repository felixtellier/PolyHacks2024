import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { Garden } from '@common/garden';
import { InRequest } from '@common/request';
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

    sendRequest(request: InRequest): Observable<void> {
        return this.http.post<void>(`${this.baseUrl}/garden`, request).pipe(catchError(this.handleError<void>('PushGarden')));
    }

    getGarden(id: number): Observable<Garden> {
        return this.http.get<Garden>(`${this.baseUrl}/garden/${id}`).pipe(catchError(this.handleError<Garden>('GetGarden')));
    }

    pushGarden(garden: Garden): Observable<Garden> {
        return this.http.put<Garden>(`${this.baseUrl}/garden`, garden).pipe(catchError(this.handleError<Garden>('PushGarden')));
    }

    postUser(username: string, password: string): Observable<User> {
        return this.http.post(`${this.baseUrl}/user`, { username, password }, { observe: 'response', responseType: 'text' });
    }

    private handleError<T>(request: string, result?: T): (error: Error) => Observable<T> {
        return () => of(result as T);
    }
}
