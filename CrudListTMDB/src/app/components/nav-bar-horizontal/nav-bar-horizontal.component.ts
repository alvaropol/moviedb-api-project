import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { AccountService } from '../../service/account.service';


@Component({
  selector: 'app-nav-bar-horizontal',
  templateUrl: './nav-bar-horizontal.component.html',
  styleUrls: ['./nav-bar-horizontal.component.css']
})
export class NavBarHorizontalComponent implements OnInit {
  isLoggedIn: boolean = false;
  avatarPath: string = '';
  username: string = '';


  constructor(private route: ActivatedRoute, private authService: AuthService, private accountService: AccountService) { }
  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      if (resp != null) {
        this.isLoggedIn = true;
        this.avatarPath = resp.avatar.tmdb.avatar_path;
        this.username = resp.username;
      }
    })
  }

  doLogin() {
    this.authService.getRequestToken().subscribe(resp => {
      localStorage.setItem('request_token', resp.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('request_token')}?redirect_to=http://localhost:4200/approved`;
    })
  }

  getImgAvatar() {
    if (this.avatarPath != null) {
      return `https://image.tmdb.org/t/p/w500${this.avatarPath}`;
    } else {
      return 'https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg'
    }
  }

  isMoviesRouteActive(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'movies';
  }

  isActorsRouteActive(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'actors';
  }

  isTVShowRouteActive(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'tv-shows';
  }

  isTrendingRouteActive(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'trending';
  }


}
