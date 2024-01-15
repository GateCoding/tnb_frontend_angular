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

  getDemandesList(): Observable<Demande[]> {
    return this.httpClient.get<Demande[]>(`${this.baseUrl}`);
  }
  modifierMessageDemande(demande: Demande): Observable<any> {
    const url = `${this.baseUrl}/modifierMessageDemande/${demande.id}`;
    return this.httpClient.put(url, demande.reponseDemande);
  }

  postDemande(demande: Demande): Observable<Object> {
    return this.httpClient.post(`http://localhost:8085/publish`, demande);
  }
  //   getRedevablesList(): Observable<Redevable[]> {
  //     return this.httpClient.get<Redevable[]>(`${this.baseUrl}/all`);
  //   }
  //   getDemandes(): Observable<Demande[]> {
  //     // Appeler l'API pour récupérer la liste des demandes
  //     return this.httpClient.get<Demande[]>(`${this.baseUrl}/liste`);
  //   }

  //   traiterDemandePaiement(demande: Demande): Observable<any> {
  //     // Appeler l'API pour traiter la demande
  //     return this.httpClient.post(`${this.baseUrl}/traiter`, demande);
  //   }
}
