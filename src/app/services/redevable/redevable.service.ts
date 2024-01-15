import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Redevable } from '../../models/redevable';

@Injectable({
  providedIn: 'root',
})
export class RedevableService {
  private baseUrl = 'http://localhost:8084/api/redevable';
  constructor(private httpClient: HttpClient) {}

  getRedevablesList(): Observable<Redevable[]> {
    return this.httpClient.get<Redevable[]>(`${this.baseUrl}/all`);
  }

  deleteRedevable(id: number | undefined): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  createRedevable(redevable: Redevable): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/save`, redevable);
  }

  updateRedevable(redevable: Redevable): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/update`, redevable);
  }

  getredevableByCin(cin: string | undefined): Observable<Redevable> {
    return this.httpClient.get<Redevable>(`${this.baseUrl}/findByCin/${cin}`);
  }

  getRedevableById(id: number | undefined): Observable<Redevable> {
    return this.httpClient.get<Redevable>(`${this.baseUrl}/findById/${id}`);
  }
}
