import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { TrendingService } from '../../service/trending.service';
import { Movie } from '../../models/movie-list.interface';

@Component({
  selector: 'app-page-trending-movie',
  templateUrl: './page-trending-movie.component.html',
  styleUrls: ['./page-trending-movie.component.css']
})
export class PageTrendingMovieComponent implements OnInit {


  listMovieDay: Movie[] = [];
  listMovieWeek: Movie[] = [];

  constructor(private trendingService: TrendingService, private config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.trendingService.getMovieDay().subscribe(resp => {
      this.listMovieDay = resp.results;
    });
    this.trendingService.getMovieWeek().subscribe(resp => {
      this.listMovieWeek = resp.results;
    });
  }

  urlImage(poster_path: String | undefined): string {
    return `https://image.tmdb.org/t/p/w440_and_h660_face${poster_path}`;
  }

  raiting(vote_average: number | undefined): number {
    return vote_average! / 2;
  }

}
