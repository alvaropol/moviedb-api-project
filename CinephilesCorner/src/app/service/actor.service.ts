import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActorListResponse } from '../models/actor-list.interface';
import { ActorDetailResponse } from '../models/actor-detail.interface';
import { Observable } from 'rxjs';
import { MoviePersonResponse } from '../models/actor-movie.interface';
import { TvShowsPersonResponse } from '../models/actor-tvshow.interface';
import { environment } from '../../environments/environment.development';

const ACTOR_BASE_URL = 'person';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  getList(page: number): Observable<ActorListResponse> {
    return this.http.get<ActorListResponse>(`${environment.apiBaseUrl}/${ACTOR_BASE_URL}/popular?api_key=${environment.apiKey}&&page=${page}`);
  }

  getByName(name: string, page: number): Observable<ActorListResponse> {
    return this.http.get<ActorListResponse>(`${environment.apiBaseUrl}/search/person?api_key=${environment.apiKey}&query=${name}&page=${page}`);
  }

  getById(id: number): Observable<ActorDetailResponse> {
    return this.http.get<ActorDetailResponse>(`${environment.apiBaseUrl}/${ACTOR_BASE_URL}/${id}?api_key=${environment.apiKey}`);
  }

  getMovies(id: number): Observable<MoviePersonResponse> {
    return this.http.get<MoviePersonResponse>(`${environment.apiBaseUrl}/${ACTOR_BASE_URL}/${id}/movie_credits?api_key=${environment.apiKey}`);
  }

  getTvShows(id: number): Observable<TvShowsPersonResponse> {
    return this.http.get<TvShowsPersonResponse>(`${environment.apiBaseUrl}/${ACTOR_BASE_URL}/${id}/tv_credits?api_key=${environment.apiKey}`);
  }
}
