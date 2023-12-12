import { HttpClient } from '@angular/common/http';
import { GenreListResponse } from '../models/genre-list.inteface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<GenreListResponse> {
    return this.http.get<GenreListResponse>(`${environment.apiBaseUrl}/genre/movie/list?api_key=${environment.apiKey}`);
  }
}
