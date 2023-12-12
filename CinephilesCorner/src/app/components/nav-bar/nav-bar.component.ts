import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private route: ActivatedRoute, private accountService: AccountService) { }
  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      if (resp != null) {
        this.isLoggedIn = true;
      }
    })
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

  isHomeRouteActive(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'home';
  }

}
