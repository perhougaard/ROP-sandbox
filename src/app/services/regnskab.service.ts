import { Injectable } from '@angular/core';
import { IRegnskabPost } from '../models/regnskabpost.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegnskabService {

  constructor(private http: HttpClient) { }
  private regnskabPostFile = 'regnskabposter.json';

  getAllRegnskabPoster(): Observable<IRegnskabPost[]> {
    return this.http.get<IRegnskabPost[]>(`assets/${this.regnskabPostFile}`)
      .pipe(
        tap(data => console.log('Regnskabposter blev indlæst', data))
      );
  }
}
