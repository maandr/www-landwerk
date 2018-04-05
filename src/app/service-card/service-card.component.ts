import { CarouselMixin, ServiceDataJson } from '../common/mixins/carousel.mixin';
import { Component, OnInit, Input } from '@angular/core';
import { ImageSlide } from '../image-carousel/image-carousel.types';
import { LocalFileService } from '../local-file.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'landwerk-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() name: string;
  @Input() title: string;

  slides: ImageSlide[];
  bulletpoints: string[];

  private dataSource: Observable<ServiceDataJson>;

  constructor(
    private localFileService: LocalFileService,
    private carouselMixin: CarouselMixin
  ) {}

  ngOnInit() {
    this.initializeFromJsonFile();
  }

  private initializeFromJsonFile() {
    this.dataSource = this.localFileService.getJson<ServiceDataJson>('service.' + this.name);
    this.dataSource.subscribe(response => {
      this.slides = this.carouselMixin.extractImageSlides(response);
      this.bulletpoints = response.bulletpoints;
    });
  }
}