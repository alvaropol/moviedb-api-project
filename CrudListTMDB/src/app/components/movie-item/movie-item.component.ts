
import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Genre } from '../../models/genre.interface';
import { Movie } from '../../models/movie-list.interface';
import { Cast } from '../../models/actor-movie.interface';
import { List } from '../../models/account-lists.interface';
import { AccountService } from '../../service/account.service';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input() movie!: Movie | Cast;
  @Input() genres: Genre[] = [];

  listsPersonalized: List[] = [];

  constructor(config: NgbRatingConfig, private accountService: AccountService, private modalService: NgbModal) {

    config.max = 5;
    config.readonly = true;
  }

  urlImage(): string {
    return `https://image.tmdb.org/t/p/w440_and_h660_face${this.movie.poster_path}`;
  }

  raiting(): number {
    return this.movie.vote_average / 2;
  }

  getGenreNames(genreIds: number[]): string[] {
    const movieGenres = this.genres.filter((genre) => genreIds.includes(genre.id));
    return movieGenres.map((genre) => genre.name);
  }


  openModal(content: TemplateRef<any>) {
    this.accountService.getListPersonalized().subscribe(resp => {
      this.listsPersonalized = resp.results;
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    });
  }

  addToList(listId: any, movieId: any) {
    this.accountService.addMovieToListPersonalized(listId, movieId).subscribe()
    this.modalService.dismissAll();
  }

}