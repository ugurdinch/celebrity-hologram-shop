import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CelebrityHologramComponent } from "./celebrity-hologram.component";

import { CelebrityHologramRoutingModule } from "./celebrity-hologram-routing.module";
import { CreateCelebrityHologramComponent } from './create-celebrity-hologram/create-celebrity-hologram.component';
import { SharedModule } from "../_shared/shared.module";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DeleteCelebrityHologramComponent } from './delete-celebrity-hologram/delete-celebrity-hologram.component';


@NgModule({
	declarations: [
		CelebrityHologramComponent,
		CreateCelebrityHologramComponent,
		DeleteCelebrityHologramComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		CelebrityHologramRoutingModule,
		SharedModule,
		NgbModule
	]
})
export class CelebrityHologramModule {}