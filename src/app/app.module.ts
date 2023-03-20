//modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { AppRouterModule } from './routes.module';
import { HttpClientModule } from '@angular/common/http';




//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PracticalAreasComponent } from './components/practical-areas/practical-areas.component';
import { TeamComponent } from './components/team/team.component';
import { TeamService } from '../app/services/team.service';
import { RealEstateComponent } from './components/real-estate/real-estate.component';
import { CreatePostComponent } from './components/blog/create-post/create-post.component';
import { ListPostComponent } from './components/blog/list-post/list-post.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PostComponent } from './components/blog/post/post.component';
import { PostsComponent } from './components/blog/posts/posts.component';


//Firebase Storage
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    PracticalAreasComponent,
    TeamComponent,
    RealEstateComponent,
    CreatePostComponent,
    ListPostComponent,
    LoginComponent,
    RegisterComponent,
    PostComponent,
    PostsComponent


  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
