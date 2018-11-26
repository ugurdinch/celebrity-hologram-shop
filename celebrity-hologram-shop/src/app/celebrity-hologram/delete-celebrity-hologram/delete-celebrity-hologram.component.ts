import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteCelebrityHologramService } from './delete-celebrity-hologram.service';
import { CelebrityHologram } from 'src/app/_shared/models/celebrity-hologram.model';
import { AppConfig } from 'src/app/app-config.constants';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-delete-celebrity-hologram',
  templateUrl: './delete-celebrity-hologram.component.html',
	styleUrls: ['./delete-celebrity-hologram.component.scss'],
	providers: [DeleteCelebrityHologramService]
})
export class DeleteCelebrityHologramComponent implements OnInit {
	errorMessageForDeleteCelebrityHologram: any;
	isProcessingToDeleteCelebrityHologram: boolean;
	
	celebrityHologram: CelebrityHologram; // instead of retrieving this through the usual @Input() decorator, it will be populated via toggle() below
	@Output() updateView = new EventEmitter();

	modalReference: NgbModalRef; // ng-bootstrap modal reference
	@ViewChild('content') content; // modal content

	constructor(private deleteCelebrityHologramService: DeleteCelebrityHologramService,
							private ngbModal: NgbModal,
							private sanitizer: DomSanitizer) { }

  ngOnInit() {
	}
	
	deleteCelebrityHologram(celebrityHologramID: number) {
		this.isProcessingToDeleteCelebrityHologram = true; // show processing button
		this.errorMessageForDeleteCelebrityHologram = null; // clear error message

		this.deleteCelebrityHologramService.deleteCelebrityHologram(celebrityHologramID)
																				.pipe(finalize(() => this.isProcessingToDeleteCelebrityHologram = false)) // hide processing button 
																				.subscribe(() => {
																										this.modalReference.close(); // close modal
																										this.updateView.emit({message: 'Celebrity hologram has been successfully deleted.'}); // update view
																									},
																									error => this.errorMessageForDeleteCelebrityHologram = error.error); // display error dialog on failure 
	}

	toggle(celebrityHologram: CelebrityHologram) {
		this.celebrityHologram = celebrityHologram;

		this.modalReference = this.ngbModal.open(this.content, { centered: true, size: 'sm', windowClass: 'modal-holder' });
	}

	sanitize(url: string) {
		if (url.indexOf('uploads\\') == 0) url = `${AppConfig.API_ENDPOINT}/${url}`;

		return this.sanitizer.bypassSecurityTrustUrl(url);
	}
}
