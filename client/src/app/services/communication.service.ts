import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Garden } from '@common/garden';
import { InRequest } from '@common/request';
import { User } from '@common/user';
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

    pushGarden(garden: Garden): Observable<Garden> {
        return this.http.put<Garden>(`${this.baseUrl}/garden`, garden).pipe(catchError(this.handleError<Garden>('PushGarden')));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    postUser(username: string, password: string): Observable<any> {
        return this.http.post(`${this.baseUrl}/user`, { username, password }, { responseType: 'json' });
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(`${this.baseUrl}/user/${id}`).pipe(catchError(this.handleError<User>('GetUser')));
    }

    private handleError<T>(request: string, result?: T): (error: Error) => Observable<T> {
        return () => of(result as T);
    }
}
