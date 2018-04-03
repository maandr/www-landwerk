import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: HomeComponent },
  { path: 'ueber-uns', component: HomeComponent },
  { path: 'über-uns', component: HomeComponent },
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
