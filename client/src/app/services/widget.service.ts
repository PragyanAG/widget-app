import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/widgets';
@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(baseUrl);
  }
  create(data: any) {
    return this.http.post(baseUrl, data);
  }
}
