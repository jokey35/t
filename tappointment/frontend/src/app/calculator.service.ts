import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  setmemory(data:string) {
    return this.http.post(`${environment.apiUrl}/setmemory/`, {"number":data})
    .subscribe();
  }

  getmemory() {
    return this.http.get<string>(`${environment.apiUrl}/getmemory`);
}
}
