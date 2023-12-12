import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../service/account.service';
import { TvShow } from '../../models/tv-show-list.interface';
import { TvShowRated } from '../../models/tv-show-list-rated.interface';
import { Movie } from '../../models/movie-list.interface';
import { MovieRated } from '../../models/movie-list-rated.interface';
import { AccountDetailListResponse } from '../../models/account-detail-list.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { List } from '../../models/account-lists.interface';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  description = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);
  deleted = false;

  username: string = '';
  avatarPath: string = '';
  country: string = '';
  tvshowWatchlist: TvShow[] = [];
  movieWatchlist: Movie[] = [];
  movieFavourites: Movie[] = [];
  tvshowFavourites: TvShow[] = [];
  movieRated: MovieRated[] = [];
  tvshowRated: TvShowRated[] = [];
  listsPersonalized!: List[];
  selectedList!: AccountDetailListResponse;

  constructor(private route: ActivatedRoute, private accountService: AccountService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      if (resp != null) {
        this.avatarPath = resp.avatar.tmdb.avatar_path;
        this.username = resp.username;
        this.country = resp.iso_3166_1
      }
    });
    this.accountService.getWatchlistMovies().subscribe(resp => {
      this.movieWatchlist = resp.results;
    });
    this.accountService.getWatchlistTvShows().subscribe(resp => {
      this.tvshowWatchlist = resp.results;
    });
    this.accountService.getFavouritesMovies().subscribe(resp => {
      this.movieFavourites = resp.results;
    });
    this.accountService.getFavouritesTvShows().subscribe(resp => {
      this.tvshowFavourites = resp.results;
    });
    this.accountService.getRatedMovies().subscribe(resp => {
      this.movieRated = resp.results;
    });
    this.accountService.getRatedTvShows().subscribe(resp => {
      this.tvshowRated = resp.results;
    });
    this.accountService.getListPersonalized().subscribe(resp => {
      this.listsPersonalized = resp.results;
    })
  }

  getImgAvatar() {
    if (this.avatarPath != null) {
      return `https://image.tmdb.org/t/p/w500${this.avatarPath}`;
    } else {
      return 'https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg'
    }
  }

  getImageMovie(profile_path: string | null): string {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`;
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
  }

  openDetails(content: TemplateRef<any>, id: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.accountService.getListPersonalizedDetail(id).subscribe(resp => {
      this.selectedList = resp;
    });
  }

  submit() {
    this.accountService.createListPersonalized(this.name.value, this.description.value).subscribe(resp => {
      this.accountService.getListPersonalized().subscribe(resp => {
        this.listsPersonalized = resp.results;
      });
      this.modalService.dismissAll();
    });

  }

  clear(listId: any) {
    this.accountService.clearListPersonalized(listId).subscribe();
  }

  deleteList(listId: any) {
    this.accountService.deleteListPersonalized(listId).subscribe(resp => {
      this.accountService.getListPersonalized().subscribe(resp => {
        this.listsPersonalized = resp.results;
      });
    });
    this.deleted = true;
  }

}
