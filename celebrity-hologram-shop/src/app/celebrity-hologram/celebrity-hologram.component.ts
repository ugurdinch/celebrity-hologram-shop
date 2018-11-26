import { Component, OnInit } from '@angular/core';
import { CelebrityHologramService } from './celebrity-hologram.service';
import { CelebrityHologram } from '../_shared/models/celebrity-hologram.model';
import { DomSanitizer } from '@angular/platform-browser';
import { AppConfig } from '../app-config.constants';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-celebrity-hologram',
  templateUrl: './celebrity-hologram.component.html',
	styleUrls: ['./celebrity-hologram.component.scss'],
	providers: [CelebrityHologramService]
})
export class CelebrityHologramComponent implements OnInit {
	celebrityHolograms: Array<CelebrityHologram>;
	isProcessingToGetCelebrityHolograms: boolean;
	errorMessageForGetCelebrityHolograms: any;
	successMessage: any;

	constructor(private celebrityHologramService: CelebrityHologramService,
							private sanitizer: DomSanitizer) { }

  ngOnInit() {
		this.getCelebrityHolograms();
	}

	getCelebrityHolograms() {
		this.isProcessingToGetCelebrityHolograms = true; // show processing
		this.errorMessageForGetCelebrityHolograms = null; // reset error message

		this.celebrityHologramService.getCelebrityHolograms()
			.pipe(finalize(() => this.isProcessingToGetCelebrityHolograms = false)) // hide processing
			.subscribe((data: Array<CelebrityHologram>) => {
				this.celebrityHolograms = data;
			},
			error => this.errorMessageForGetCelebrityHolograms = error.message); // display error message on failure // hide processing
	}

	sanitize(url: string) {
		if (url.indexOf('uploads\\') == 0) url = `${AppConfig.API_ENDPOINT}/${url}`;

		return this.sanitizer.bypassSecurityTrustUrl(url);
	}

	updateView(messageObject: any) {
		this.successMessage = null;

		this.getCelebrityHolograms(); // update the list

		// display success message - using the timer here to create a "flashing" effect when there are two subsequent messages
		setTimeout(() => this.successMessage = messageObject.message, 100); 
	}

}
