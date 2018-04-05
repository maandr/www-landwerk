import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { RoutingService, Relation } from '../routing.service';

@Component({
  selector: 'landwerk-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  relations: Relation[];

  constructor(
    public routingService: RoutingService
  ) {}

  ngOnInit() {
    this.relations = [
      { label: 'Über uns', href: '/', anchor: 'ueber-uns' },
      { label: 'Dienstleistungen', href: '/', anchor: 'dienstleistungen' },
      { label: 'Kontakt', href: '/', anchor: 'kontakt' }
    ];
  }
}