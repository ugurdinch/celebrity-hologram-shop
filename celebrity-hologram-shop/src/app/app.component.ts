import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { SwipeService } from './_shared/swipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	animations: [
    trigger('sideMenuSlide', [
      state('slideRight', style({
        left: 0
      })),
      state('slideLeft', style({
        left: '-200px'
      })),
      transition('slideRight => slideLeft', [
        animate('0.2s')
      ]),
      transition('slideLeft => slideRight', [
        animate('0.2s')
      ]),
		]),
		trigger('bodySlide', [
      state('slideRight', style({
        left: '200px'
      })),
      state('slideLeft', style({
        left: '0px'
      })),
      transition('slideRight => slideLeft', [
        animate('0.2s')
      ]),
      transition('slideLeft => slideRight', [
        animate('0.2s')
      ]),
    ]),
	],
	providers: [SwipeService]
})
export class AppComponent {

	constructor(public appService: AppService,
							public swipeService: SwipeService) {}

	swipe(event: any, type: string) {
		this.swipeService.swipe(
			event, 
			type, 
			this.slideRight.bind(this), 
			this.slideLeft.bind(this)
		);
	}

	slideRight() {
		this.appService.isMenuOpen = true;
	}
	slideLeft() {
		this.appService.isMenuOpen = false;
	}
}
