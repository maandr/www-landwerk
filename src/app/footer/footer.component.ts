import { Component, OnInit } from '@angular/core';
import { RoutingService, Relation } from '../routing.service';

@Component({
  selector: 'landwerk-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  relations: Relation[];

  constructor(
    public routingService: RoutingService
  ) {}

  ngOnInit() {
    this.relations = [
      { label: 'Kontakt', href: '', anchor: 'kontakt' },
      { label: 'Stellenangebote', href: '/stellenangebote' },
      { label: 'Impressum', href: '/impressum' },
    ];
  }
}