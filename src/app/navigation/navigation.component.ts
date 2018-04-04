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
      { label: 'Über uns', anchor: 'ueber-uns' },
      { label: 'Dienstleistungen', anchor: 'dienstleistungen' },
      { label: 'Kontakt', anchor: 'kontakt' }
    ];
  }
}

interface NavigationEntry {
  label: string;
  anchor: string;
}
