import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AuthenticationService } from '../authentication.service';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
	providers: [LoginService]
})
export class LoginComponent implements OnInit {
	isProcessingToLogin: boolean;
	errorMessageForLogin: any;
	year: number = new Date().getFullYear();

	constructor(private authenticationService: AuthenticationService,
							private loginService: LoginService,
							private localStorageService: LocalStorageService,
							private router: Router) { }

  ngOnInit() {
	}

	login(credentials: any) {
		this.isProcessingToLogin = true; // show processing
		this.errorMessageForLogin = null; // clear error message

		this.loginService.login(credentials)
											.pipe(finalize(() => this.isProcessingToLogin = false)) // hide processing
											.subscribe((data: any) => {

																		this.localStorageService.setToken(data.token); // setToken
																		this.localStorageService.setTokenExpiry(new Date(new Date().setMinutes(new Date().getMinutes() + 60)).toISOString()); // 60 minutes

																		this.localStorageService.setUsername(credentials.email); // set email

																		setTimeout(() => this.router.navigate(['/celebrity-holograms']), 0); // navigate

																		// setInterval(() => this.authenticationService.checkTokenExpiry(), 10000); // every 10 seconds, check token expiry -- not implemented
																	},
																	error => {
																		if (error.status == 401) this.errorMessageForLogin = "The email or password you have entered is invalid.";
																		else this.errorMessageForLogin = error.error;
																	}); // hide processing
	}
}
