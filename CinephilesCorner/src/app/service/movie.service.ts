import { Injectable } from '@angular/core';
import { MovieListResponse } from '../models/movie-list.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieDetailResponse } from '../models/movie-detail.interface';
import { GenreResponse } from '../models/genre.interface';
import { MovieCreditsResponse } from '../models/movie-credits.interface';
import { TrailerListResponse } from '../models/trailer-list.interface';
import { CreditsResponse } from '../models/credits-interface';
import { RatingResponse } from '../models/rating.interface';
import { environment } from '../../environments/environment.development';

const MOVIE_BASE_URL = 'movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularList(page: number): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/popular?api_key=${environment.apiKey}&&page=${page}`);
  }

  getPopularListHome(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/popular?api_key=${environment.apiKey}`);
  }

  getMovieById(id: number): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/${id}?api_key=${environment.apiKey}`);
  }

  getUpcomingList(page: number): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/upcoming?api_key=${environment.apiKey}&&page=${page}`);
  }

  getUpcomingListHome(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/upcoming?api_key=${environment.apiKey}`);
  }

  getTopRatedList(page: number): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/top_rated?api_key=${environment.apiKey}&&page=${page}`);
  }

  getTopRatedListHome(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/top_rated?api_key=${environment.apiKey}`);
  }

  getNowPlayingList(page: number): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/now_playing?api_key=${environment.apiKey}&&page=${page}`);
  }

  getNowPlayingListHome(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/now_playing?api_key=${environment.apiKey}`);
  }

  getListP(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/now_playing?api_key=${environment.apiKey}`);
  }

  getGenres(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(`${environment.apiBaseUrl}/genre/movie/list?api_key=${environment.apiKey}`);
  }

  getList(page: number): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/now_playing?api_key=${environment.apiKey}&&page=${page}`);
  }

  getMovie(id: number): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/${id}?api_key=${environment.apiKey}`);
  }

  getMovieCredits(id: number): Observable<MovieCreditsResponse> {
    return this.http.get<MovieCreditsResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/${id}/credits?api_key=${environment.apiKey}`);
  }

  getByGenreAndPage(id: number, page: number): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/discover/movie?api_key=${environment.apiKey}&with_genres=${id}&&page=${page}`)
  }

  getByName(name: string, page: number): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/search/movie?api_key=${environment.apiKey}&query=${name}&&page=${page}`);
  }

  getListVideoByIdMovie(id: number): Observable<TrailerListResponse> {
    return this.http.get<TrailerListResponse>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc`);
  }


  getCredits(id: number): Observable<CreditsResponse> {
    return this.http.get<CreditsResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/${id}/credits?api_key=${environment.apiKey}`);
  }

  deleteRateByIdMovie(id: number): Observable<RatingResponse> {
    return this.http.delete<RatingResponse>(`${environment.apiBaseUrl}/movie/${id}/rating?session_id=${localStorage.getItem('session_id')}&api_key=${environment.apiKey}`);
  }

  rateForAMovieById(id: number, value: number): Observable<RatingResponse> {
    return this.http.post<RatingResponse>(`${environment.apiBaseUrl}/movie/${id}/rating?session_id=${localStorage.getItem('session_id')}`, {
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