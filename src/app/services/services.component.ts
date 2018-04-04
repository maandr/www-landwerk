import { Component, OnInit } from '@angular/core';
import { ImageSlide } from '../image-carousel/image-carousel.types';

@Component({
  selector: 'landwerk-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  slides: {
    garden: ImageSlide[],
    forestry: ImageSlide[]
  }

  constructor() { }

  ngOnInit() {
  }

}
