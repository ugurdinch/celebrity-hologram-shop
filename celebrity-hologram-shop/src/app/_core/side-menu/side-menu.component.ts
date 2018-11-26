import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { LocalStorageService } from 'src/app/_auth/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

	constructor(public appService: AppService,
							private localStorageService: LocalStorageService,
							private router: Router) { }

  ngOnInit() {
	}
	
	logout() {
		this.appService.isMenuOpen = false;

		this.localStorageService.removeSession();
	}

}
