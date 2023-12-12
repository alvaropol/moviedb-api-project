import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../../service/tv-show.service';
import { TvShow } from '../../models/tv-show-list.interface';
import { Genre } from '../../models/genre.interface';


@Component({
  selector: 'app-page-tv-show-on-the-air-list',
  templateUrl: './page-tv-show-on-the-air-list.component.html',
  styleUrls: ['./page-tv-show-on-the-air-list.component.css']
})
export class PageTvShowOnTheAirListComponent implements OnInit {

  tvshowList: TvShow[] = [];
  actualPage: number = 1;
  genres: Genre[] = [];
  tvshowCount!: number;
  tvshowFound: number = 0;
  showFilters = false;

  constructor(private tvshowService: TvShowService) { }

  ngOnInit(): void {
    this.loadNewPage();
    this.tvshowService.getGenres().subscribe(resp => this.genres = resp.genres);
  }
  loadNewPage(): void {
    this.tvshowService.getListOnTheAir(this.actualPage).subscribe(resp => {
      this.tvshowList = resp.results;
      this.tvshowCount = resp.total_results;
      this.tvshowService.getGenres().subscribe(respG => {
        this.genres = respG.genres;
      })
    })
  }

  getGenreNames(genreIds: number[]): string[] {
    const tvshowGenres = this.genres.filter((genre) => genreIds.includes(genre.id));
    return tvshowGenres.map((genre) => genre.name);
  }

  changeVisibility() {
    this.showFilters = !this.showFilters;
  }

  loadPageForName(event: any) {
    let nameMovie = event.target.value;
    if (nameMovie == '') {
      this.loadNewPage();
    } else {
      this.tvshowService.getByName(event.target.value, this.actualPage).subscribe(resp => {
        this.tvshowList = resp.results;
        this.tvshowFound = resp.total_results;
      });
    }
  }

  loadPageByGender(event: any) {
    let checked = event.currentTarget.checked;
    let valor = event.currentTarget.value;
    if (checked) {
      this.tvshowService.getListOnTheAir(this.actualPage).subscribe(resp => {
        this.tvshowList = resp.results.filter(m => m.genre_ids.includes(+valor));
        this.tvshowCount = resp.total_results;
      });
    } else {
      this.loadNewPage();
    }
  }
}
