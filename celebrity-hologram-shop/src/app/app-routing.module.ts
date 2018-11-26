import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from "@angular/core";
import { AuthenticationGuard } from './_auth/authentication-guard.service';
import { LoginComponent } from './_auth/login/login.component';
import { LoginGuard } from './_auth/login-guard.service';

const appRoutes: Routes = [
	{ path: '',   redirectTo: '/login', pathMatch: 'full' },
	
	{ path: 'celebrity-holograms', loadChildren: 'src/app/celebrity-hologram/celebrity-hologram.module#CelebrityHologramModule', canActivate: [AuthenticationGuard]},

	{ path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})], // lazy laoding with preloading 
	exports: [RouterModule],
	providers: [AuthenticationGuard, LoginGuard]
})

export class AppRoutingModule {}