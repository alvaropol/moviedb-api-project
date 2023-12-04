import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TvShowListResponse } from '../models/tv-show-list.interface';
import { Observable } from 'rxjs';
import { TvShowDetailResponse } from '../models/tv-show-detail.interface';
import { GenreResponse } from '../models/genre.interface';
import { CreditsResponse } from '../models/credits-interface';
import { TvShowCreditsResponse } from '../models/tv-show-credits.interface';
import { TrailerListResponse } from '../models/trailer-list.interface';
import { RatingResponse } from '../models/rating.interface';
import { environment } from '../../environments/environment.development';

const TV_SHOW_BASE_URL = 'tv';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private http: HttpClient) { }

  getListAiringTday(page: number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/airing_today?api_key=${environment.apiKey}&&page=${page}`);
  }

  getListTopRated(page: number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/top_rated?api_key=${environment.apiKey}&&page=${page}`);
  }

  getListOnTheAir(page: number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/on_the_air?api_key=${environment.apiKey}&&page=${page}`);
  }

  getListPopular(page: number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/popular?api_key=${environment.apiKey}&&page=${page}`);
  }

  getTvShow(id: number): Observable<TvShowDetailResponse> {
    return this.http.get<TvShowDetailResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/${id}?api_key=${environment.apiKey}`);
  }

  getListNoPage(): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/popular?api_key=${environment.apiKey}`);
  }

  getGenres(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(`${environment.apiBaseUrl}/genre/${TV_SHOW_BASE_URL}/list?api_key=${environment.apiKey}`);
  }

  getCredits(id: number): Observable<TvShowCreditsResponse> {
    return this.http.get<CreditsResponse>(`${environment.apiBaseUrl}/tv/${id}/credits?api_key=${environment.apiKey}`);
  }

  getByName(name: string, page: number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/search/tv?api_key=${environment.apiKey}&query=${name}&&page=${page}`);
  }

  getListTvShowByIdMovie(id: number): Observable<TrailerListResponse> {
    return this.http.get<TrailerListResponse>(`${environment.apiBaseUrl}/tv/${id}/videos?api_key=${environment.apiKey}`);
  }

  deleteRateByIdTvShow(id: number): Observable<RatingResponse> {
    return this.http.delete<RatingResponse>(`${environment.apiBaseUrl}/tv/${id}/rating?session_id=${localStorage.getItem('session_id')}&api_key=${environment.apiKey}`);
  }

  rateForATvShowById(id: number, value: number): Observable<RatingResponse> {
    return this.http.post<RatingResponse>(`${environment.apiBaseUrl}/tv/${id}/rating?session_id=${localStorage.getItem('session_id')}`, {
      value: value
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    }
    );
  }
}
