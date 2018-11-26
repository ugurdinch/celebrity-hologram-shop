import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../app-config.constants";

@Injectable()
export class CelebrityHologramService {

	constructor(private http: HttpClient) {}

	getCelebrityHolograms() {
		return this.http.get(`${AppConfig.API_ENDPOINT}/celebrity-holograms`);
	}
}