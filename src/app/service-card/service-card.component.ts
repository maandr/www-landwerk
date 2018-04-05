import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ImageSlide } from '../image-carousel/image-carousel.types';
import { CarouselMixin, ServiceDataJson } from '../common/mixins/carousel.mixin';
import { LocalFileService } from '../local-file.service';

@Component({
  selector: 'landwerk-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent extends CarouselMixin implements OnInit {

  @Input() name: string;
  @Input() title: string;

  slides: ImageSlide[];
  services: string[];

  private dataSource: Observable<ServiceDataJson>;

  constructor(
    private localFileService: LocalFileService
  ) {
    super();
  }

  ngOnInit() {
    this.fetchStaticDataFromJsonFile();
  }

  private fetchStaticDataFromJsonFile() {
    // filepath?
    this.dataSource = this.localFileService.getJson<ServiceDataJson>('slides.' + this.name);
    this.dataSource.subscribe(response => {
      this.slides = this.extractImageSlides(response);
      this.services = response.services;
    });
  }
}