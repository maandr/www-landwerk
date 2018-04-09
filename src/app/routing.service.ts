import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Injectable()
export class RoutingService {

  constructor(
    private router: Router,
    private scrollService: ScrollToService
) {}

  open(rel: Relation) {
    if(!rel.anchor) {
      return this.router.navigateByUrl(rel.href);
    }

    const currentRoute = (this.router.url.indexOf('#'))
      ? this.router.url.split('#')[0]
      : this.router.url;

    if(currentRoute === rel.href) {
      this.scrollService.scrollTo({
        target: rel.anchor
      });
    } else {
      this.router.navigateByUrl(rel.href, { fragment: rel.anchor });
    }
  }
}

export interface Relation {
    label: string;
    href: string;
    anchor?: string;
}