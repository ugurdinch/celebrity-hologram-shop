import { NgModule } from "@angular/core";
import { ErrorMessageComponent } from "./components/error-message/error-message.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SuccessMessageComponent } from './components/success-message/success-message.component';

@NgModule({
	declarations: [
		ErrorMessageComponent,
		SuccessMessageComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		NgbModule
	],
	exports: [
		ErrorMessageComponent,
		SuccessMessageComponent
	]
})
export class SharedModule {}