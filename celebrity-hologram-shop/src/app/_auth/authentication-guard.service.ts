// this guard prevents users to load modules or navigate to components if they are not authenticated

import { AuthenticationService } from "./authentication.service";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanLoad, Route } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationGuard implements CanActivate, CanLoad {

	constructor(private authenticationService: AuthenticationService,
							private route: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (! this.authenticationService.isAuthenticated()) {
			this.route.navigate(['./login']);
			return false;
		}
		return true;
	}

	canLoad(route: Route) {
		if (! this.authenticationService.isAuthenticated()) {
			this.route.navigate(['./login']);
			return false;
		}
		return true;
	}
}
