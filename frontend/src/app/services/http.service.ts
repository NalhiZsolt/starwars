import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggedInUser } from '../models/logged-in-user';
import { LoginData } from '../models/login-data';
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BASE_URL = 'https://developer.webstar.hu/rest/frontend-felveteli/'
  constructor(private http: HttpClient) { }
  loggedInUser: BehaviorSubject<any> = new BehaviorSubject<LoggedInUser>(null)

  login(personData:LoginData): Observable<LoggedInUser> {
    return this.http.post<LoggedInUser>(this.BASE_URL + 'authentication/', personData)
    .pipe(
      tap(
        (loginData: LoggedInUser) => {
          if(loginData) {
            localStorage.setItem('accessToken', loginData.accessToken);
            localStorage.setItem('refreshToken', loginData.refreshToken);
            this.loggedInUser.next({
              email: loginData.user.email,
              firstName: loginData.user.firstName,
              lastName: loginData.user.lastName
            })
          }
        },
        err => {
          console.error(err)
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
          this.loggedInUser.next(null);
        }
      )
    )
  }

  getCharacters() {
    return this.http.get(this.BASE_URL+'characters/')
  }
  //https://developer.webstar.hu/rest/frontend-felveteli/characters/


  // logout(data) {
  //   return this.http.post(this.BASE_URL + '/logout', data)
  //   .pipe(
  //     tap(response => {
  //       localStorage.removeItem('accessToken')
  //       localStorage.removeItem('refreshToken')
  //       this.loggedInUser.next(null)
  //     }, err => {
  //       localStorage.removeItem('accessToken')
  //       localStorage.removeItem('refreshToken')
  //       this.loggedInUser.next(null)
  //     })
  //   )
  // }

}
