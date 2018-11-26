export class SwipeService {
	// swipe - https://stackoverflow.com/questions/42592156/what-is-the-best-way-to-implement-swipe-navigation-in-angular-2 
	swipeCoord?: [number, number];
	swipeTime?: number;
	swipe(e: TouchEvent, when: string, callbackPrevious: any, callbackNext: any): void {
		const coord: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
		const time = new Date().getTime();

		if (when === 'start') {
			this.swipeCoord = coord;
			this.swipeTime = time;
		}

		else if (when === 'end') {
			const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
			const duration = time - this.swipeTime;

			if (duration < 1000 
						&& Math.abs(direction[0]) > 30 //Long enough
						&& Math.abs(direction[0]) > Math.abs(direction[1] * 3) ) { //Horizontal enough
				
				const swipe = direction[0] < 0 ? 'next' : 'previous';
			
				if (swipe == 'next') {
					callbackNext();
				}
				else {
					callbackPrevious();
				}
			}
		}
	}
}