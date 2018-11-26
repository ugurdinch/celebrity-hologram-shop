import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "./local-storage.service";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../app-config.constants";

@Injectable()
export class AuthenticationService {
	tokenExpiresIn: number; // in minutes

	constructor(private http: HttpClient,
							private router: Router,
							private localStorageService: LocalStorageService) {

		if (this.isAuthenticated()) {
			// setTimeout(() => setInterval(() => this.checkTokenExpiry(), 10000), 3000); // every 10 seconds, check token expiry -- not implemented
		}
	}

	login(credentials) {
		return this.http.post(`${AppConfig.API_ENDPOINT}/users/login`, credentials);
	}

	logout() {
		this.localStorageService.removeSession();
		this.router.navigate(['login']);
	}

	isAuthenticated() {
		return this.localStorageService.getToken() && this.localStorageService.getTokenExpiry() > new Date().toISOString();
	}

	// checkTokenExpiry() {
	// 	let tokenExpiry = this.localStorageService.getTokenExpiry();

	// 	if (tokenExpiry) {
	// 		let now = new Date();

	// 		let diff = (new Date(tokenExpiry).getTime() - now.getTime()); 
	// 		diff = Math.round(diff / 60000); // difference in minutes

	// 		this.tokenExpiresIn = diff;
	// 	}
	// }

}