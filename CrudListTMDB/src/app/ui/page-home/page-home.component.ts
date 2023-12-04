import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../models/movie-list.interface';


@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  images: any[] = [];
  moviePopularList: Movie[] = [];
  movieTopRatedList: Movie[] = [];
  movieUpcomingList: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getListP().subscribe(resp => {
      this.moviePopularList = resp.results;
      this.images = resp.results;
    });
    this.movieService.getTopRatedListHome().subscribe(resp => {
      this.movieTopRatedList = resp.results;
      this.images = resp.results;
    });
    this.movieService.getUpcomingListHome().subscribe(resp => {
      this.movieUpcomingList = resp.results;
      this.images = resp.results;
    });
  }

  getImageMovie(profile_path: string | null): string {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`;
  }
}
