import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: LandingPageComponent },
  { path: 'ueber-uns', component: LandingPageComponent },
  { path: 'über-uns', component: LandingPageComponent },
  { path: 'services', component: LandingPageComponent },
  { path: 'dienstleistungen', component: LandingPageComponent },
  { path: 'kontakt', component: LandingPageComponent },
  { path: 'contact', component: LandingPageComponent },
  { path: 'impressum', component: ImpressumComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
