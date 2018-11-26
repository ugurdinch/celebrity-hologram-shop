import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "src/app/app-config.constants";
import { CelebrityHologram } from "src/app/_shared/models/celebrity-hologram.model";

@Injectable()
export class CreateCelebrityHologramService {

	constructor(private http: HttpClient) {}

	createCelebrityHologram(celebrityHologram: CelebrityHologram) {
		return this.http.post(`${AppConfig.API_ENDPOINT}/celebrity-holograms`, celebrityHologram);
	}
}