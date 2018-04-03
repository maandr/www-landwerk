import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landwerk-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  entries: NavigationEntry[];

  constructor() {
  }

  ngOnInit() {
    this.entries = [
      { label: 'About', href: '/über-uns' },
      { label: 'Dienstleistungen', href: '/dienstleistungen' },
      { label: 'Kontakt', href: '/kontakt' },
      { label: 'Impressum', href: '/impressum' },
    ];
  }
}

interface NavigationEntry {
  label: string;
  href: string;
}
