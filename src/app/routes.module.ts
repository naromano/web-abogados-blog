import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamComponent } from './components/team/team.component';
import { RealEstateComponent } from './components/real-estate/real-estate.component';
import { PracticalAreasComponent } from './components/practical-areas/practical-areas.component';
import { CreatePostComponent } from './components/blog/create-post/create-post.component';
import { ListPostComponent } from './components/blog/list-post/list-post.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [

	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'quienessomos', component: TeamComponent },
	{ path: 'sectorinmobiliario', component: RealEstateComponent },
	{ path: 'contacto', component: ContactComponent },
	{ path: 'areaspracticas', component: PracticalAreasComponent },
	{ path: 'nuevo', component: CreatePostComponent },
	{ path: 'listapublicaciones', component: ListPostComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRouterModule { }
