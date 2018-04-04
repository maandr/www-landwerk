import { Component, OnInit } from '@angular/core';
import { ImageSlide } from '../image-carousel/image-carousel.component';

@Component({
  selector: 'landwerk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides: ImageSlide[];

  ngOnInit() {
    const CAROUSEL_IMAGE_PATH: string = '../../assets/images/slider/';
    this.slides = [
      { 
        src: CAROUSEL_IMAGE_PATH + '4.jpg',
        alt: 'Garten- und Landschaftsbau',
        caption: 'Wir bieten Ihnen unsere Unterstützung bei der Grundstückgestaltung. Planungsarbeiten, Begrünung, Pflasterarbeiten u.v.m'
      },
      { 
        src: CAROUSEL_IMAGE_PATH + '35.jpg',
        alt: 'Forstarbeiten',
        caption: 'Wir bieten Ihnen unsere Dienste bei Forstarbeiten an.'
      },
      {
        src: CAROUSEL_IMAGE_PATH + '12.jpg',
        alt: 'Baumarbeiten',
        caption: 'Wir füren Baumarbeiten, wie Baumfällungen, Hecken- und Kronenschnitt oder Schredderarbeiten durch.'
      },
      {
        src: CAROUSEL_IMAGE_PATH + '11.jpg',
        alt: 'Maschineneinsatz',
        caption: 'Sie benötigen Maschineneinsatz wie Bagger, Radlader, Forwarder? Dann können wir Ihnen behilflich sein'
      },
      {
        src: CAROUSEL_IMAGE_PATH + '14.jpg',
        alt: 'Motorsägenseminare & Schulungen',
        caption: 'Bei uns können Sie Motorsägenseminare und -Schulungen buchen.'
      },
      {
        src: CAROUSEL_IMAGE_PATH + '38.jpg',
        alt: 'Winterdienstarbeiten',
        caption: 'Zusätzlich bieten wir Winterdienstarbeiten im privaten Bereich.'
      }
    ];
  }
}