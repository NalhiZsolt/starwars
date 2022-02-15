import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone({ headers: request.headers.set('Applicant-Id', 'tNQnB7hhVJhD6bZW').set('Application-Authorization', `Bearer ${localStorage.getItem('accessToken')}`)  },)
    return next.handle(req)
  }
}
