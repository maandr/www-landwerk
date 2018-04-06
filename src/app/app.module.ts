import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LocalFileService } from './local-file.service';
import { RoutingService } from './routing.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarouselMixin } from './common/mixins/carousel.mixin';
import { JobsComponent } from './jobs/jobs.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ImpressumComponent,
    ServicesComponent,
    ContactComponent,
    NavigationComponent,
    ImageCarouselComponent,
    FooterComponent,
    ServiceCardComponent,
    LandingPageComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    LocalFileService,
    RoutingService,
    CarouselMixin
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
