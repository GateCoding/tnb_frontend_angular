import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/models/demande';

import { DemandeService } from 'src/app/services/demande/demande.service';
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css'],
})
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css'],
})
export class DemandeComponent implements OnInit {
  demandes: Demande[] = [];

  constructor(private demandeService: DemandeService) {}

  ngOnInit(): void {
    this.loadDemandes();
  }

  loadDemandes() {
    this.demandeService.getDemandes().subscribe(
      (data) => {
        this.demandes = data;
      },
      (error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des demandes :",
          error
        );
      }
    );
  }

  validerDemande(demande: Demande) {
    // Logique pour valider la demande
    console.log('Demande validée:', demande);
  }

  rejeterDemande(demande: Demande) {
    // Logique pour rejeter la demande
    console.log('Demande rejetée:', demande);
  }
}
