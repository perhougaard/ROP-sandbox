import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { IPriskurantPost } from "../models/priskurantpost.model";

@Injectable({
  providedIn: 'root'
})
export class PriskurantService {
  private priskurantPostFile = 'poster.json';
  constructor(private http: HttpClient) { }

  getAllPriskurantPoster(): Observable<IPriskurantPost[]> {
    return this.http.get<IPriskurantPost[]>(`assets/${this.priskurantPostFile}`)
      .pipe(
        tap(data => console.log('Priskurantposter blev indlæst'))
      );
  }
}
