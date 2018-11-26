import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "src/app/app-config.constants";

@Injectable()
export class LoginService {

	constructor(private http: HttpClient) {}

	login(credentials: any) {
		return this.http.post(`${AppConfig.API_ENDPOINT}/users/login`, credentials);
	}
}