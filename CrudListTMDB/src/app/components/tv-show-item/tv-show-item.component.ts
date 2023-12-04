import { Component, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Genre } from '../../models/movie-detail.interface';
import { TvShow } from '../../models/tv-show-list.interface';

@Component({
  selector: 'app-tv-show-item',
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.css']
})
export class TvShowItemComponent {

  @Input() tvshow!: TvShow;
  @Input() genres: Genre[] = [];

  urlImage(): string {
    return `https://image.tmdb.org/t/p/w440_and_h660_face${this.tvshow.poster_path}`;
  }

  raiting(): number {
    return this.tvshow.vote_average / 2;
  }

  getGenreNames(genreIds: number[]): string[] {
    const tvshowGenres = this.genres.filter((genre) => genreIds.includes(genre.id));
    return tvshowGenres.map((genre) => genre.name);
  }

  constructor(config: NgbRatingConfig) {

    config.max = 5;
    config.readonly = true;
  }
}
