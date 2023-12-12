import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { AppComponent } from './app.component';
import { PageMoviePopularComponent } from './ui/page-movie-popular/page-movie-popular.component';
import { PageDetailsComponent } from './ui/page-details/page-details.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { PageTvShowAirlingTodayListComponent } from './ui/page-tv-show-airling-today-list/page-tv-show-airling-today-list.component';
import { PageMovieUpcomingComponent } from './ui/page-movie-upcoming/page-movie-upcoming.component';
import { PageMovieTopRatedComponent } from './ui/page-movie-top-rated/page-movie-top-rated.component';
import { PageMovieNowPlayingComponent } from './ui/page-movie-now-playing/page-movie-now-playing.component';
import { PageTvShowTopRatedListComponent } from './ui/page-tv-show-top-rated-list/page-tv-show-top-rated-list.component';
import { PageTvShowOnTheAirListComponent } from './ui/page-tv-show-on-the-air-list/page-tv-show-on-the-air-list.component';
import { PageTvShowPopularListComponent } from './ui/page-tv-show-popular-list/page-tv-show-popular-list.component';
import { PageDetailsTvShowComponent } from './ui/page-details-tv-show/page-details-tv-show.component';
import { PageActorDetailComponent } from './ui/page-actor-detail/page-actor-detail.component';
import { PageTrendingTvshowComponent } from './ui/page-trending-tvshow/page-trending-tvshow.component';
import { PageTrendingMovieComponent } from './ui/page-trending-movie/page-trending-movie.component';
import { PageTrendingActorsComponent } from './ui/page-trending-actors/page-trending-actors.component';
import { AuthAprovedComponent } from './components/auth-aproved/auth-aproved.component';
import { PageProfileComponent } from './ui/page-profile/page-profile.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'approved', component: AuthAprovedComponent },
  { path: 'profile', component: PageProfileComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'movies',
    children: [
      { path: 'now-playing', component: PageMovieNowPlayingComponent },
      { path: 'popular', component: PageMoviePopularComponent },
      { path: 'top-rated', component: PageMovieTopRatedComponent },
      { path: 'upcoming', component: PageMovieUpcomingComponent },
    ]
  },
  {
    path: 'movie',
    children: [
      { path: 'detail/:id', component: PageDetailsComponent }
    ]
  },
  { path: 'actors', component: ActorListComponent },
  {
    path: 'actor',
    children: [
      { path: 'detail/:id', component: PageActorDetailComponent }
    ]
  },
  {
    path: 'tv-show',
    children: [
      { path: 'detail/:id', component: PageDetailsTvShowComponent }
    ]
  },
  {
    path: 'tv-shows',
    children: [
      { path: 'airing-today', component: PageTvShowAirlingTodayListComponent },
      { path: 'on-the-air', component: PageTvShowOnTheAirListComponent },
      { path: 'popular', component: PageTvShowPopularListComponent },
      { path: 'top-rated', component: PageTvShowTopRatedListComponent }
    ]
  },
  {
    path: 'trending',
    children: [
      { path: 'tv-shows', component: PageTrendingTvshowComponent },
      { path: 'movies', component: PageTrendingMovieComponent },
      { path: 'actors', component: PageTrendingActorsComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
