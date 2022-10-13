import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MutantService {
  private URL = 'http://localhost:3000/api/test-soyyo/';

  constructor(private http: HttpClient) {}

  searchMutant(mutantData: String) {
    return this.http.get<any>(this.URL);
  }
}
