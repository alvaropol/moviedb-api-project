import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ActorItemComponent } from "./components/actor-item/actor-item.component";
import { AuthAprovedComponent } from "./components/auth-aproved/auth-aproved.component";
import { MovieItemComponent } from "./components/movie-item/movie-item.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MoviesFilterComponent } from "./components/movies-filter/movies-filter.component";
import { NavBarHorizontalComponent } from "./components/nav-bar-horizontal/nav-bar-horizontal.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { TvShowItemComponent } from "./components/tv-show-item/tv-show-item.component";
import { TvShowListComponent } from "./components/tv-show-list/tv-show-list.component";
import { PageActorDetailComponent } from "./ui/page-actor-detail/page-actor-detail.component";
import { PageDetailsTvShowComponent } from "./ui/page-details-tv-show/page-details-tv-show.component";
import { PageDetailsComponent } from "./ui/page-details/page-details.component";
import { PageMovieNowPlayingComponent } from "./ui/page-movie-now-playing/page-movie-now-playing.component";
import { PageMoviePopularComponent } from "./ui/page-movie-popular/page-movie-popular.component";
import { PageMovieTopRatedComponent } from "./ui/page-movie-top-rated/page-movie-top-rated.component";
import { PageMovieUpcomingComponent } from "./ui/page-movie-upcoming/page-movie-upcoming.component";
import { PageNotFoundComponent } from "./ui/page-not-found/page-not-found.component";
import { PageProfileComponent } from "./ui/page-profile/page-profile.component";
import { PageTrendingActorsComponent } from "./ui/page-trending-actors/page-trending-actors.component";
import { PageTrendingMovieComponent } from "./ui/page-trending-movie/page-trending-movie.component";
import { PageTrendingTvshowComponent } from "./ui/page-trending-tvshow/page-trending-tvshow.component";
import { PageTvShowAirlingTodayListComponent } from "./ui/page-tv-show-airling-today-list/page-tv-show-airling-today-list.component";
import { PageTvShowOnTheAirListComponent } from "./ui/page-tv-show-on-the-air-list/page-tv-show-on-the-air-list.component";
import { PageTvShowPopularListComponent } from "./ui/page-tv-show-popular-list/page-tv-show-popular-list.component";
import { PageTvShowTopRatedListComponent } from "./ui/page-tv-show-top-rated-list/page-tv-show-top-rated-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule, NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ActorListComponent } from "./components/actor-list/actor-list.component";
import { PageHomeComponent } from "./ui/page-home/page-home.component";



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    PageHomeComponent,
    PageNotFoundComponent,
    ActorItemComponent,
    MovieItemComponent,
    TvShowItemComponent,
    NavBarComponent,
    NavBarHorizontalComponent,
    PageDetailsComponent,
    PageMovieTopRatedComponent,
    PageMoviePopularComponent,
    PageMovieNowPlayingComponent,
    PageMovieUpcomingComponent,
    PageTvShowAirlingTodayListComponent,
    TvShowListComponent,
    PageActorDetailComponent,
    PageTvShowTopRatedListComponent,
    PageTvShowOnTheAirListComponent,
    PageTvShowPopularListComponent,
    PageDetailsTvShowComponent,
    PageTrendingMovieComponent,
    PageTrendingTvshowComponent,
    PageTrendingActorsComponent,
    MoviesFilterComponent,
    AuthAprovedComponent,
    PageProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbRatingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 0,
      outerStrokeColor: "#78C000",
      animationDuration: 300,
      showBackground: true,
      backgroundColor: "#21242D",
      showSubtitle: false,
      responsive: true,
      titleFontSize: "100",
      showUnits: false,
      titleFontWeight: "600",
      titleColor: "#ffffff"
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";


