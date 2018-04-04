import { Component, OnInit, Input } from '@angular/core';
import { ImageSlide } from '../image-carousel/image-carousel.types';
import { JsonLoader } from '../common/data-import';

@Component({
  selector: 'landwerk-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() name: string;
  @Input() title: string;

  slides: ImageSlide[];
  services: string[];

  ngOnInit() {
    this.fetchStaticDataFromJsonFile();
  }

  private fetchStaticDataFromJsonFile() {
    const dataJson = require('../data/slides.' + this.name + '.json');
    this.slides = JsonLoader.loadSlides(dataJson);
    this.services = dataJson.services;
  }
}