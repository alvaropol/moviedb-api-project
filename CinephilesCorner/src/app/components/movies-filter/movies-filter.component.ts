import { Component, EventEmitter, Output } from '@angular/core';
import { GenreService } from '../../service/genre.service';
import { Genre } from '../../models/movie-detail.interface';


@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent {

  genreList: Genre[] = [];
  @Output() genreClick = new EventEmitter<number>;
  @Output() allClick = new EventEmitter<number>;
  showFilters = false;
  selectedGenre: number = 0;
  defaultActive = true;

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getMovieList().subscribe(resp => {
      this.genreList = resp.genres;
    })
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  viewGenre(genre: Genre) {
    this.selectedGenre = genre.id;
    this.defaultActive = false;
    this.genreClick.emit(genre.id);
  }

  viewAll() {
    this.selectedGenre = -1;
    this.allClick.emit(-1);
  }

}
