import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamComponent } from './components/team/team.component';
import { RealEstateComponent } from './components/real-estate/real-estate.component';
import { PracticalAreasComponent } from './components/practical-areas/practical-areas.component';

const routes: Routes = [

	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'quienessomos', component: TeamComponent },
	{ path: 'sectorinmobiliario', component: RealEstateComponent },
	{ path: 'contacto', component: ContactComponent },
	{ path: 'areaspracticas', component: PracticalAreasComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRouterModule { }
