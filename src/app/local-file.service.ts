import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/observable/of";

const TARGET_DIR: string = './assets/json/';

@Injectable()
export class LocalFileService {

  constructor(
    private httpClient: HttpClient
  ) {}

  public getJson<T>(filename: string): Observable<T> {
    return this.httpClient.get<T>(TARGET_DIR + filename + '.json');
  }
}