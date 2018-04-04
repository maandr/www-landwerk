import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landwerk-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  entries: NavigationEntry[];

  constructor() {
  }

  ngOnInit() {
    this.entries = [
      { label: 'About', href: '/über-uns' },
      { label: 'Dienstleistungen', href: '/dienstleistungen' },
      { label: 'Kontakt', href: '/kontakt' }
    ];
  }
}

interface NavigationEntry {
  label: string;
  href: string;
}
