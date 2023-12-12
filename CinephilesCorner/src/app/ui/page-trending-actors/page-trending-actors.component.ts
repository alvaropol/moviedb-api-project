import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../../service/trending.service';
import { Actor } from '../../models/actor-list.interface';


@Component({
  selector: 'app-page-trending-actors',
  templateUrl: './page-trending-actors.component.html',
  styleUrls: ['./page-trending-actors.component.css']
})
export class PageTrendingActorsComponent implements OnInit {

  listActorDay: Actor[] = [];
  listActorWeek: Actor[] = [];

  constructor(private trendingService: TrendingService) { }

  ngOnInit(): void {
    this.trendingService.getActorDay().subscribe(resp => {
      this.listActorDay = resp.results;
    });
    this.trendingService.getActorWeek().subscribe(resp => {
      this.listActorWeek = resp.results;
    });
  }

  getImage(profile_path: String | undefined) {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`;
  }
}
