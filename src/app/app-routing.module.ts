import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { DonateComponent } from './donate/donate.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { JoinUsFormComponent } from './join-us-form/join-us-form.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { MembersComponent } from './members/members.component';
import { ProjectsComponent } from './projects/projects.component';
import { SavePeopleComponent } from './save-people/save-people.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home/gallery',   redirectTo: '/gallery', pathMatch: 'full' },
  { path: 'home/joinUs',   redirectTo: '/joinUs', pathMatch: 'full' },
  { path: 'home/members',   redirectTo: '/members', pathMatch: 'full' },
  { path: 'home/projects',   redirectTo: '/projects', pathMatch: 'full' },
  { path: 'home/home',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home/joinusForm',   redirectTo: '/joinusForm', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'members', component: MembersComponent },
  { path: 'savePeople', component: SavePeopleComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'joinUs', component: JoinUsComponent },
  { path: 'joinusForm', component: JoinUsFormComponent },
  { path: 'advantages', component: AdvantagesComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'thankyou', component: ThankYouComponent },
  // { path: 'contact', component: Conta }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
