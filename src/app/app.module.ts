import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule}from 'ng2-ckeditor'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PracticalAreasComponent } from './components/practical-areas/practical-areas.component';
import { BlogComponent } from './components/blog/blog.component';
import { TeamComponent } from './components/team/team.component';
import { TeamService } from '../app/services/team.service';
import { RealEstateComponent } from './components/real-estate/real-estate.component';


import { AppRouterModule } from './routes.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    PracticalAreasComponent,
    BlogComponent,
    TeamComponent,
    RealEstateComponent,

  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
