import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demande } from 'src/app/models/demande';

@Injectable({
  providedIn: 'root',
})
export class DemandeService {
  private baseUrl = 'http://localhost:8085/api/demande';

  constructor(private httpClient: HttpClient) {}

  getDemandessList(cin: string | undefined): Observable<Demande[]> {
    return this.httpClient.get<Demande[]>(`${this.baseUrl}/redevable/${cin}`);
  }
  getDemandes(): Observable<Demande[]> {
    // Appeler l'API pour récupérer la liste des demandes
    return this.httpClient.get<Demande[]>(`${this.baseUrl}/liste`);
  }

  traiterDemandePaiement(demande: Demande): Observable<any> {
    // Appeler l'API pour traiter la demande
    return this.httpClient.post(`${this.baseUrl}/traiter`, demande);
  }
}
