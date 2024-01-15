import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Taxe } from 'src/app/models/taxe';

@Injectable({
  providedIn: 'root',
})
export class TaxeService {
  private baseUrl = 'http://localhost:8085/api';

  constructor(private httpClient: HttpClient) {}

  getTaxesList(cin: string | undefined): Observable<Taxe[]> {
    return this.httpClient.get<Taxe[]>(`${this.baseUrl}/redevable/${cin}`);
  }
}
