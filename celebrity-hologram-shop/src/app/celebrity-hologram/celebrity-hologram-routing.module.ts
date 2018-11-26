import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CelebrityHologramComponent } from './celebrity-hologram.component';

const celebrityHologramRoutes: Routes = [
	{ path: '', component: CelebrityHologramComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(celebrityHologramRoutes)
	],
	exports: [
		RouterModule
	]
})
export class CelebrityHologramRoutingModule {}