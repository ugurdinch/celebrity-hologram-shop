import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "src/app/app-config.constants";
import { CelebrityHologram } from "src/app/_shared/models/celebrity-hologram.model";

@Injectable()
export class DeleteCelebrityHologramService {

	constructor(private http: HttpClient) {}

	deleteCelebrityHologram(celebrityHologramID: number) {
		return this.http.delete(`${AppConfig.API_ENDPOINT}/celebrity-holograms/${celebrityHologramID}`);
	}
}