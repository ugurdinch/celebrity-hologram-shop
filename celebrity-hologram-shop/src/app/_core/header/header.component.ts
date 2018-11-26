import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	
  constructor(private appService: AppService) { }

  ngOnInit() {
	}
	
	toggleMenu() {
		this.appService.isMenuOpen = ! this.appService.isMenuOpen;
	}
}
