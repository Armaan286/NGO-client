import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { ProjectsComponent } from './projects/projects.component';
import { DonateComponent } from './donate/donate.component';
import { SavePeopleComponent } from './save-people/save-people.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { JoinUsFormComponent } from './join-us-form/join-us-form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterComponent,
    HomeComponent,
    MembersComponent,
    JoinUsComponent,
    GalleryComponent,
    AdvantagesComponent,
    ProjectsComponent,
    DonateComponent,
    SavePeopleComponent,
    AboutUsComponent,
    JoinUsFormComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
