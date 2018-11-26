import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCelebrityHologramService } from './create-celebrity-hologram.service';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-celebrity-hologram',
  templateUrl: './create-celebrity-hologram.component.html',
	styleUrls: ['./create-celebrity-hologram.component.scss'],
	providers: [CreateCelebrityHologramService]
})
export class CreateCelebrityHologramComponent implements OnInit {
	isProcessingToCreateCelebrityHologram: boolean;
	errorMessageForCreateCelebrityHologram: any;
	image: any;
	contentType: any;
	
	modalReference: NgbModalRef; // ng-bootstrap modal reference
	@ViewChild('content') content; // modal content

	@Output() updateView = new EventEmitter(); // event emitter to notify the parent

  constructor(private createCelebrityHologramService: CreateCelebrityHologramService,
							private ngbModal: NgbModal) { }

  ngOnInit() {
	}

	createCelebrityHologram(createCelebrityHologramForm: NgForm) {
		this.isProcessingToCreateCelebrityHologram = true; // show processing button
		this.errorMessageForCreateCelebrityHologram = null; // clear error message

		if (createCelebrityHologramForm.value.fileSource == "fileDirectory") createCelebrityHologramForm.value.image = this.image; // add to params

		this.createCelebrityHologramService.createCelebrityHologram(createCelebrityHologramForm.value)
																				.pipe(finalize(() => this.isProcessingToCreateCelebrityHologram = false)) // hide processing button 
																				.subscribe(() => {
																										createCelebrityHologramForm.reset({isKeepModalOpen: createCelebrityHologramForm.value.isKeepModalOpen}); // reset form
																										if (! createCelebrityHologramForm.value.isKeepModalOpen) this.modalReference.close(); // close modal
																										this.updateView.emit({message: 'Celebrity hologram has been successfully created.'}); // update view
																									},
																									error => this.errorMessageForCreateCelebrityHologram = error.message); // display error dialog on failure 
	}

	toggle() {
		this.modalReference = this.ngbModal.open(this.content, { centered: true, size: 'lg', windowClass: 'modal-holder' });
	}
	
	parseFile(selectedFile) {
		if (selectedFile.length > 0) {
				// Select the very first file from list
				var fileToLoad = selectedFile[0];

				this.contentType = fileToLoad.type; // maintain content type

				// FileReader function for read the file.
				var fileReader = new FileReader();

				// Onload of file read the file content
				fileReader.onload = (fileLoadedEvent : any) => {
					this.image = fileLoadedEvent.target.result;
				};

				// Convert data to base64
				fileReader.readAsDataURL(fileToLoad);
		}
	}

}
