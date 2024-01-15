import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Taxe } from 'src/app/models/taxe';

@Injectable({
  providedIn: 'root',
})
export class TaxeTnbService {
  private baseUrl = 'http://localhost:8085/api/taxe';
  constructor(private httpClient: HttpClient) {}

  // getTaxesList(): Observable<Taxe[]> {
  //   return this.httpClient.get<Taxe[]>(`${this.baseUrl}/all`);
  // }

  deleteTaxe(id: number | undefined): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  createTaxe(taxe: Taxe): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/save`, taxe);
  }

  updateTaxe(taxe: Taxe): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/update`, taxe);
  }

  // getTaxeByTerrain(cin: string | undefined): Observable<Taxe> {
  //   return this.httpClient.get<Taxe>(`${this.baseUrl}/findByTerrain/${cin}`);
  // }

  getTaxeById(id: number | undefined): Observable<Taxe> {
    return this.httpClient.get<Taxe>(`${this.baseUrl}/findById/${id}`);
  }
}
