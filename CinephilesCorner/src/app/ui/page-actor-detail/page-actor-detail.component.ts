import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from '../../service/actor.service';
import { Cast } from '../../models/actor-movie.interface';
import { CastTvShow } from '../../models/actor-tvshow.interface';
import { ActorDetailResponse } from '../../models/actor-detail.interface';


@Component({
  selector: 'app-page-actor-detail',
  templateUrl: './page-actor-detail.component.html',
  styleUrls: ['./page-actor-detail.component.css']
})
export class PageActorDetailComponent implements OnInit {
  actor!: ActorDetailResponse;
  actorId!: number;
  route: ActivatedRoute = inject(ActivatedRoute);
  actorMovies!: Cast[];
  actorTvShows !: CastTvShow[];

  constructor(private actorService: ActorService) {
    this.actorId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.actorService.getById(this.actorId).subscribe(resp => { this.actor = resp });
    this.actorService.getMovies(this.actorId).subscribe(resp => {
      this.actorMovies = resp.cast;
    });
    this.actorService.getTvShows(this.actorId).subscribe(resp => {
      this.actorTvShows = resp.cast;
    });
  }

  urlImage(): string {
    return `https://image.tmdb.org/t/p/original${this.actor.profile_path}`;
  }

  getImageMovie(profile_path: string | null): string {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`;
  }

  testDataKnownForDepartment(known_for_department: String | null) {
    if (known_for_department != null)
      return known_for_department;
    return "No Data"
  }

  testDataPopularity(number: number | null) {
    if (number != null)
      return number;
    return "No Data"
  }

  testDataBirthDay(date: string | null) {
    if (date != null)
      return date;
    return "No Data"
  }

  testDataPlaceOfBirth(place_of_birth: null) {
    if (place_of_birth != null)
      return place_of_birth;
    return "No Data"
  }

  testDataBiography(biography: string | null) {
    if (biography != null)
      return biography;
    return "This actor has no biography"
  }
}
