/*
	1) sets Authorization header for the api calls
	2) logs the user out and redirects to login page any time the api returns 401
*/

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AppConfig } from './app-config.constants';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from './_auth/authentication.service';
import { LocalStorageService } from './_auth/local-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

	constructor(private authenticationService: AuthenticationService,
							private localStorageService: LocalStorageService,
							private router: Router) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		
		// set the Authorization header for the api calls
		let copiedReq: HttpRequest<any>;
		const token = this.localStorageService.getToken(); // get token
		if (token && req.url.indexOf(AppConfig.API_ENDPOINT) > -1) { // if there is a token AND this is an api call
			copiedReq	= req.clone({headers: req.headers.set('Authorization', `Bearer ${this.localStorageService.getToken()}`)}) // set Authorization header
		}

		// intercept the response from the api
		return next.handle(copiedReq || req)
			.pipe(
				tap(
					event => {
						if (event instanceof HttpResponse) { // check only for HttpResponse
							if (event.url.indexOf(AppConfig.API_ENDPOINT) > -1) { // intercept only web api calls
								if (event.ok) { // successful web api call 2xx return
									this.localStorageService.setTokenExpiry(new Date(new Date().setMinutes(new Date().getMinutes() + AppConfig.TOKEN_TIMEOUT)).toISOString());
								}
							}
						}
					},
					error => {
						if (error instanceof HttpErrorResponse) { // check only for HttpErrorResponse
							if (error.url.indexOf(AppConfig.API_ENDPOINT) > -1 && error.url.indexOf('/login') == -1) { // intercept only "non-login" web api calls
								if (error.status == 401) {	// unauthorized
									this.localStorageService.setTokenExpiry(new Date().toISOString()); // overwrite session expiry with now
									this.router.navigate(['login']);
								}
							}
						}
					}
				)
			)
	}

}