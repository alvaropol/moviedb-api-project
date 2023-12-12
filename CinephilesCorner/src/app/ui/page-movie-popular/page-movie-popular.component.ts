import { Component, OnInit } from '@angular/core';
import { Genre } from '../../models/genre.interface';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../models/movie-list.interface';

@Component({
  selector: 'app-page-movie-popular',
  templateUrl: './page-movie-popular.component.html',
  styleUrls: ['./page-movie-popular.component.css']
})
export class PageMoviePopularComponent implements OnInit {

  movieList: Movie[] = [];
  actualPage: number = 1;
  genres: Genre[] = [];
  moviesFound: number = 0;
  movieCount!: number;
  showFilters = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage();
    this.movieService.getGenres().subscribe(resp => this.genres = resp.genres);
  }

  loadNewPage(): void {
    this.movieService.getPopularList(this.actualPage).subscribe(resp => {
      this.movieList = resp.results;
      this.movieCount = resp.total_results;
      this.movieService.getGenres().subscribe(respG => {
        this.genres = respG.genres;
      });
    });
  }

  getGenreNames(genreIds: number[]): string[] {
    const movieGenres = this.genres.filter((genre) => genreIds.includes(genre.id));
    return movieGenres.map((genre) => genre.name);
  }


  changeVisibility() {
    this.showFilters = !this.showFilters;
  }

  loadPageForName(event: any) {
    let nameMovie = event.target.value;
    if (nameMovie == '') {
      this.loadNewPage();
    } else {
      this.movieService.getByName(event.target.value, this.actualPage).subscribe(resp => {
        this.movieList = resp.results;
        this.moviesFound = resp.total_results;
      });
    }
  }

  loadPageByGender(event: any) {
    let checked = event.currentTarget.checked;
    let valor = event.currentTarget.value;
    if (checked) {
      this.movieService.getPopularList(this.actualPage).subscribe(resp => {
        this.movieList = resp.results.filter(m => m.genre_ids.includes(+valor));
        this.movieCount = resp.total_results;
      });
    } else {
      this.loadNewPage();
    }
  }
}
