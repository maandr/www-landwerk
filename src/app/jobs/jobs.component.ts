import { Component, OnInit } from '@angular/core';
import { LocalFileService } from '../local-file.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'landwerk-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  offers: JobOffer[];

  constructor(
    private localFileService: LocalFileService
  ) {}

  ngOnInit() {
    this.localFileService.getJson<JobsData>('jobs')
      .subscribe(response => {
        this.offers = response.offers;
      });
  }
}

export interface JobsData {
  offers: JobOffer[]
}

export interface JobOffer {
  title: string,
  description: string,
  responsibilities: string[],
  skills: {
    profile: string
    required: string[],
    additional?: string[]
  }
  contact: string
}
