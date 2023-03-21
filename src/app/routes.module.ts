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
import { PostsComponent } from './components/blog/posts/posts.component';
import { PostComponent } from './components/blog/post/post.component';
import { EditPostComponent } from './components/blog/edit-post/edit-post.component';

const routes: Routes = [

	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'quienessomos', component: TeamComponent },
	{ path: 'sectorinmobiliario', component: RealEstateComponent },
	{ path: 'contacto', component: ContactComponent },
	{ path: 'areaspracticas', component: PracticalAreasComponent },
	{ path: 'panel', component: ListPostComponent },
	{ path: 'publicaciones', component: PostsComponent },
	{ path: 'publicacion/nuevo', component: CreatePostComponent },
	{ path: 'publicacion/:id', component: PostComponent },
	{ path: 'publicacion/editar/:id', component: EditPostComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRouterModule { }
