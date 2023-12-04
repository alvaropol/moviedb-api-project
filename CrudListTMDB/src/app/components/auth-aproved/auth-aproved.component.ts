import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { AccountService } from '../../service/account.service';
import { AccountDetailResponse } from '../../models/account-detail.interface';


@Component({
  selector: 'app-auth-aproved',
  templateUrl: './auth-aproved.component.html',
  styleUrls: ['./auth-aproved.component.css']
})
export class AuthAprovedComponent implements OnInit {

  constructor(private authService: AuthService, private accountService: AccountService, private router: Router) { }

  accountDetail!: AccountDetailResponse;

  ngOnInit(): void {
    this.authService.createSession(localStorage.getItem('request_token')!).subscribe(resp => {
      localStorage.setItem('session_id', resp.session_id);
      this.accountService.getAccountDetails().subscribe(resp => {
        this.accountDetail = resp;
        localStorage.setItem('username', resp.username);
        localStorage.setItem('account_id', resp.id.toString());
      });
    });
    this.router.navigateByUrl('/home');
  }
}