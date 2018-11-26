// this guard prevents users to navigate to login page if they are already authenticated

import { AuthenticationService } from "./authentication.service";
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router, Route, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {

	constructor(private authenticationService: AuthenticationService,
							private route: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this.authenticationService.isAuthenticated()) {
			this.route.navigate(['./celebrity-holograms']); // redireced to landing page
			return false;
		}
		return true;
	}
}
