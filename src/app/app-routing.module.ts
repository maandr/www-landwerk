import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'ueber-uns', component: AboutComponent },
  { path: 'über-uns', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'dienstleistungen', component: ServicesComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'impressum', component: ImpressumComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
