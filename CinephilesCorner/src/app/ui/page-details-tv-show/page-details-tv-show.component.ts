import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Genre } from '../../models/genre.interface';
import { TvShowService } from '../../service/tv-show.service';
import { AccountService } from '../../service/account.service';
import { TvShow } from '../../models/tv-show-list.interface';
import { Season, TvShowDetailResponse } from '../../models/tv-show-detail.interface';
import { Cast, TvShowCreditsResponse } from '../../models/tv-show-credits.interface';
import { Trailer } from '../../models/trailer-list.interface';

@Component({
  selector: 'app-page-details-tv-show',
  templateUrl: './page-details-tv-show.component.html',
  styleUrls: ['./page-details-tv-show.component.css']
})
export class PageDetailsTvShowComponent implements OnInit {
  tvshow!: TvShowDetailResponse;
  credits: TvShowCreditsResponse | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  tvshowId: number = 0;
  selectedTvShow !: TvShowDetailResponse;
  selectedTvShowCredits !: TvShowCreditsResponse;
  genres: Genre[] = [];
  tvshowList: TvShow[] = [];
  trailerOfTvShow!: Trailer;
  cast!: Cast[];
  crew !: Cast[];
  seasons: Season[] = [];
  valorado: boolean = false;
  value: number = 0;
  favouriteTvShows: TvShow[] = [];
  isFavourite = false;
  type = 'tv';
  estaEnWatchlist!: boolean;

  constructor(private tvshowService: TvShowService, private sanitazer: DomSanitizer, private modalService: NgbModal, private accountService: AccountService) {
    this.tvshowId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.accountService.getRatedTvShows().subscribe(resp => {
      if (resp.results.find(m => m.id == this.tvshowId)) {
        this.value = resp.results.find(m => m.id == this.tvshowId)!.rating;
        this.valorado = true;
      }
    });
    this.tvshowService.getTvShow(this.tvshowId).subscribe(resp => {
      this.tvshow = resp;
      this.seasons = this.tvshow.seasons;
    });
    this.tvshowService.getCredits(this.tvshowId).subscribe(resp => {
      this.cast = resp.cast;
      this.crew = resp.crew;
    });
    this.tvshowService.getCredits(this.tvshowId).subscribe(resp => { this.selectedTvShowCredits = resp });
    this.tvshowService.getListNoPage().subscribe(resp => {
      this.tvshowList = resp.results;
      this.tvshowService.getGenres().subscribe(respG => {
        this.genres = respG.genres;
      });
    });
    this.accountService.getWatchlistMovies().subscribe(resp => {
      this.estaEnWatchlist = resp.results.map(m => m.id).includes(this.tvshowId);
    });
    this.accountService.getFavouritesTvShows().subscribe(resp => {
      this.favouriteTvShows = resp.results;
      this.buscarFav();
    });
    this.accountService.getFavouritesTvShows().subscribe(resp => {
      this.favouriteTvShows = resp.results;
      this.buscarFav();
    });
  }

  urlBgImage(): string {
    return `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${this.tvshow.backdrop_path}`;
  }

  urlImage(): string {
    return `https://image.tmdb.org/t/p/original${this.tvshow.poster_path}`;
  }

  getDirectorName(): Cast[] {
    return this.selectedTvShowCredits.crew.filter(people => people.known_for_department == 'Directing');
  }

  getReleaseYear(): number {
    return new Date(this.tvshow.first_air_date).getFullYear();
  }

  getGenreNames(): string {
    return this.tvshow.genres.map(genre => genre.name).join(', ');
  }

  open(idtvshow: number, content: any) {

    this.tvshowService.getTvShow(idtvshow).subscribe(resp => {
      this.tvshow = resp
    });
    this.tvshowService.getListTvShowByIdMovie(idtvshow).subscribe(trailers => {
      this.trailerOfTvShow = trailers.results[0];
      this.modalService.open(content);
    });
  }

  agregarFav() {
    this.accountService.addFavorite('tv', this.tvshowId, true).subscribe(() => {
      this.buscarFav();
    });
  }

  buscarFav() {
    this.accountService.getFavouritesTvShows().subscribe(resp => {
      this.favouriteTvShows = resp.results;
      const foundTvShow = this.favouriteTvShows.find(currentTvShow => currentTvShow.id === this.tvshowId);
      this.isFavourite = foundTvShow !== undefined;
    });
  }

  getActorsList(): Cast[] {
    return this.cast.filter(people => people.known_for_department == 'Acting')
  }

  getActorImageUrl(actor: Cast): string {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`;
  }

  getVideoUrl(trailer: Trailer): any {
    return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${trailer.key}`);
  }

  rateATvShow() {
    if (this.value != 0) {
      this.tvshowService.rateForATvShowById(this.tvshowId, this.value).subscribe();
      this.valorado = true;
    }
  }
  deleteRateTvShow() {
    this.tvshowService.deleteRateByIdTvShow(this.tvshowId).subscribe(() => {
      this.valorado = false;
      this.value = 0;
    });
  }

  addToWatchList() {
    this.accountService.addWatchList(this.type, this.tvshowId, true).subscribe(resp => {
    }
    );
  }

  testDataDirector() {
    if (this.getDirectorName()[0].name != null)
      return this.getDirectorName()[0].name;
    return "No Data"
  }

  testAdult(adult: Boolean) {
    if (adult)
      return "Yes";
    return "No";
  }

  testLanguage(language: String | null): boolean {
    if (language == null)
      return false;
    return true;
  }

}
