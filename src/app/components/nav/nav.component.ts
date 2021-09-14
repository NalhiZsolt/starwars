import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  loggedInUser: any;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.loggedInUser.subscribe(
      (data:any) => this.loggedInUser = data,
      error => console.error(error)
    )
  }

  logout() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    this.httpService.loggedInUser.next(null)
    this.router.navigate(['/'])
  }

}
