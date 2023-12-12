import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../models/movie-list.interface';
import { Genre } from '../../models/movie-detail.interface';


@Component({
  selector: 'app-page-movie-top-rated',
  templateUrl: './page-movie-top-rated.component.html',
  styleUrls: ['./page-movie-top-rated.component.css']
})
export class PageMovieTopRatedComponent implements OnInit {

  movieList: Movie[] = [];
  actualPage: number = 1;
  genres: Genre[] = [];
  movieCount!: number;
  moviesFound: number = 0;
  showFilters = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage();
    this.movieService.getGenres().subscribe(resp => this.genres = resp.genres);
  }

  loadNewPage(): void {
    this.movieService.getTopRatedList(this.actualPage).subscribe(resp => {
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
      this.movieService.getTopRatedList(this.actualPage).subscribe(resp => {
        this.movieList = resp.results.filter(m => m.genre_ids.includes(+valor));
        this.movieCount = resp.total_results;
      });
    } else {
      this.loadNewPage();
    }
  }
}
