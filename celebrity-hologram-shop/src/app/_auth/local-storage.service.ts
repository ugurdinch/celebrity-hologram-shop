// This service centralizes localStorage access throughout the app

import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {

	setToken(token: string) {
		localStorage.setItem("token", token);
	}
	getToken() {
		return localStorage.getItem("token");
	}

	setTokenExpiry(tokenExpiry: string) {
		localStorage.setItem("tokenExpiry", tokenExpiry);
	}
	getTokenExpiry() {
		return localStorage.getItem("tokenExpiry");
	}

	setUsername(email: string) {
		localStorage.setItem('email',  email);
	}
	getUsername() {
		return localStorage.getItem("email");
	}

	removeSession() {
		localStorage.removeItem("token");
		localStorage.removeItem("tokenExpiry");
		localStorage.removeItem("user");
		localStorage.removeItem("email");
	}

}