import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AccountDetailResponse } from '../models/account-detail.interface';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../models/movie-list.interface';
import { TvShowListResponse } from '../models/tv-show-list.interface';
import { MovieListRatedResponse } from '../models/movie-list-rated.interface';
import { TvShowListRatedResponse } from '../models/tv-show-list-rated.interface';
import { AddAccountResponse } from '../models/add-account.interface';
import { FavoutireListResponse } from '../models/get-fav-movies.interface';
import { AddWatchlistResponse } from '../models/add-watchlist.interface';
import { environment } from '../../environments/environment.development';
import { AccountListsResponse } from '../models/account-lists.interface';
import { AccountCreateListResponse } from '../models/account-createlist.inteface';
import { AccountDetailListResponse } from '../models/account-detail-list.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<AccountDetailResponse> {
    return this.http.get<AccountDetailResponse>(`${environment.apiBaseUrl}/account?session_id=${localStorage.getItem('session_id')}`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  getWatchlistMovies(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/account/:account_id/watchlist/movies?session_id=${localStorage.getItem('session_id')}`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
  getWatchlistTvShows(): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/account/:account_id/watchlist/tv?session_id=${localStorage.getItem('session_id')}`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  getFavouritesMovies(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/account/:account_id/favorite/movies?session_id=${localStorage.getItem('session_id')}`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
  getFavouritesTvShows(): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/account/:account_id/favorite/tv?session_id=${localStorage.getItem('session_id')}`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  getRatedMovies(): Observable<MovieListRatedResponse> {
    return this.http.get<MovieListRatedResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem('account_id')}/rated/movies?&session_id=${localStorage.getItem('session_id')}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      });
  }

  getRatedTvShows(): Observable<TvShowListRatedResponse> {
    return this.http.get<TvShowListRatedResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem('account_id')}/rated/tv?&session_id=${localStorage.getItem('session_id')}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      });
  }

  addWatchList(type: string, id: number, insert: boolean): Observable<AddWatchlistResponse> {
    return this.http.post<AddWatchlistResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem('account_id')}/watchlist?session_id=${localStorage.getItem('session_id')}&api_key=${environment.apiKey}`,
      {
        media_type: type,
        media_id: id,
        watchlist: insert
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  addFavorite(type: String, id: number, favourite: boolean): Observable<AddAccountResponse> {
    console.log(type);
    console.log(id);
    console.log(favourite);
    return this.http.post<AddAccountResponse>(`${environment.apiBaseUrl}/account/:account_id/favorite?session_id=${localStorage.getItem('session_id')}&api_key=${environment.apiKey}`,
      {
        "media_type": type,
        "media_id": id,
        "favorite": favourite
      },
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  getFavSerie(): Observable<FavoutireListResponse> {
    return this.http.get<FavoutireListResponse>(`${environment.apiBaseUrl}/account/:account_id/favorite/movie?session_id=${localStorage.getItem('session_id')}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      }
    );
  }

  getListPersonalized(): Observable<AccountListsResponse> {
    return this.http.get<AccountListsResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem("account_id")}/lists?api_key=${environment.apiKey}&session_id=${localStorage.getItem("session_id")}`)
  }

  createListPersonalized(name: any, description: any): Observable<AccountCreateListResponse> {
    return this.http.post<AccountCreateListResponse>(`${environment.apiBaseUrl}/list?session_id=${localStorage.getItem("session_id")}&api_key=${environment.apiKey}`,
      {
        "name": name,
        "description": description,
        "language": "es"
      }
    )
  }

  getListPersonalizedDetail(id: any): Observable<AccountDetailListResponse> {
    return this.http.get<AccountDetailListResponse>(`${environment.apiBaseUrl}/list/${id}?api_key=${environment.apiKey}`)
  }

  deleteListPersonalized(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiBaseUrl}/list/${id}?api_key=${environment.apiKey}&session_id=${localStorage.getItem("session_id")}`)
  }

  clearListPersonalized(id: any): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/list/${id}/clear?api_key=${environment.apiKey}&session_id=${localStorage.getItem("session_id")}&confirm=true`,
      {
      })
  }
}
