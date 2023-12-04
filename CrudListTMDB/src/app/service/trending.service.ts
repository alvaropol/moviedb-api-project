import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieListResponse } from '../models/movie-list.interface';
import { Observable } from 'rxjs';
import { ActorListResponse } from '../models/actor-list.interface';
import { TvShowListResponse } from '../models/tv-show-list.interface';
import { environment } from '../../environments/environment.development';

const TRENDING_BASE_URL = 'trending';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http: HttpClient) { }

  getMovieDay(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${TRENDING_BASE_URL}/movie/day?api_key=${environment.apiKey}`);
  }

  getMovieWeek(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${TRENDING_BASE_URL}/movie/week?api_key=${environment.apiKey}`);
  }

  getActorDay(): Observable<ActorListResponse> {
    return this.http.get<ActorListResponse>(`${environment.apiBaseUrl}/${TRENDING_BASE_URL}/person/day?api_key=${environment.apiKey}`);
  }

  getActorWeek(): Observable<ActorListResponse> {
    return this.http.get<ActorListResponse>(`${environment.apiBaseUrl}/${TRENDING_BASE_URL}/person/week?api_key=${environment.apiKey}`);
  }

  getTvShowDay(): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/${TRENDING_BASE_URL}/tv/day?api_key=${environment.apiKey}`);
  }

  getTvShowWeek(): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/${TRENDING_BASE_URL}/tv/week?api_key=${environment.apiKey}`);
  }
}
