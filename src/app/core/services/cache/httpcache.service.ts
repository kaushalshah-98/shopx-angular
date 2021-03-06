import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpcacheService {
  private requests: any = {};
  constructor() {}

  put(url: string, response: HttpResponse<any>) {
    this.requests[url] = response;
  }
  get(url: string): HttpResponse<any> | undefined {
    return this.requests[url];
  }
  invalidateurl(url: string): void {
    this.requests[url] = undefined;
  }
  invalidateCache(): void {
    this.requests = {};
  }
}
