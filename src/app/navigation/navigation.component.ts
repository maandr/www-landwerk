import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { Router } from '@angular/router';

@Component({
  selector: 'landwerk-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  entries: NavigationEntry[];

  constructor(
    private router: Router,
    private scrollService: ScrollToService
  ) {}

  ngOnInit() {
    console.log(this.router.url);
    this.entries = [
      { label: 'Über uns', href: '/', anchor: 'ueber-uns' },
      { label: 'Dienstleistungen', href: '/', anchor: 'dienstleistungen' },
      { label: 'Kontakt', href: '/', anchor: 'kontakt' },
      { label: 'Impressum', href: '/impressum' }
    ];
  }

  open(rel: NavigationEntry) {
    if(rel.anchor && this.router.url === rel.href) {
      this.scrollService.scrollTo({
        target: rel.anchor
      });
    } else {
      this.router.navigateByUrl(rel.href);
    }
  }
}

interface NavigationEntry {
  label: string;
  href: string;
  anchor?: string;
}