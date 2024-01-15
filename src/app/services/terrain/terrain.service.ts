import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Taxe } from 'src/app/models/taxe';
import { Terrain } from 'src/app/models/terrain';

@Injectable({
  providedIn: 'root',
})
export class TerrainService {
  private baseUrl = 'http://localhost:8085/api/terrain';

  constructor(private httpClient: HttpClient) {}

  getTerrainsList(): Observable<Terrain[]> {
    return this.httpClient.get<Terrain[]>(`${this.baseUrl}/all`);
  }

  getTerrainById(id: number | undefined): Observable<Terrain> {
    return this.httpClient.get<Terrain>(`${this.baseUrl}/find/${id}`);
  }
}
