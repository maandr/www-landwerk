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
    if(rel.anchor && this.router.url === rel.href) {
      this.scrollService.scrollTo({
        target: rel.anchor
      });
    } else {
      this.router.navigateByUrl(rel.href);
    }
  }
}

export interface Relation {
    label: string;
    href: string;
    anchor?: string;
}