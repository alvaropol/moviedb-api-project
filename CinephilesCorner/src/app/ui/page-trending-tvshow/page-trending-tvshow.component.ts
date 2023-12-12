import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { TrendingService } from '../../service/trending.service';
import { TvShow } from '../../models/tv-show-list.interface';


@Component({
  selector: 'app-page-trending-tvshow',
  templateUrl: './page-trending-tvshow.component.html',
  styleUrls: ['./page-trending-tvshow.component.css']
})
export class PageTrendingTvshowComponent implements OnInit {

  listTvShowDay: TvShow[] = [];
  listTvShowWeek: TvShow[] = [];

  constructor(private trendingService: TrendingService, private config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.trendingService.getTvShowDay().subscribe(resp => {
      this.listTvShowDay = resp.results;
    });
    this.trendingService.getTvShowWeek().subscribe(resp => {
      this.listTvShowWeek = resp.results;
    });
  }

  urlImage(poster_path: String | undefined): string {
    return `https://image.tmdb.org/t/p/w440_and_h660_face${poster_path}`;
  }

  raiting(vote_average: number | undefined): number {
    return vote_average! / 2;
  }

}
