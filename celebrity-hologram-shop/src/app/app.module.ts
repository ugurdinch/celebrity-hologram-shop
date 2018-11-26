import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomHttpInterceptor } from './custom-http-interceptor';

// entry components
import { LoginComponent } from './_auth/login/login.component';
import { HeaderComponent } from './_core/header/header.component';
import { SideMenuComponent } from './_core/side-menu/side-menu.component';

// shared 
import { SharedModule } from './_shared/shared.module';

// services
import { AuthenticationService } from './_auth/authentication.service';
import { LocalStorageService } from './_auth/local-storage.service';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SideMenuComponent,
  ],
  imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		NgbModule.forRoot(),

		SharedModule
  ],
  providers: [
		AppService,
		AuthenticationService,
		LocalStorageService,
		{ provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
