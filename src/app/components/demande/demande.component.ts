import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/models/demande';
import { DemandeService } from 'src/app/services/demande/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css'],
})
export class DemandeComponent implements OnInit {
  demandes?: Demande[];

  constructor(private demandeService: DemandeService) {}

  ngOnInit(): void {
    this.loadDemandes();
  }

  loadDemandes() {
    this.demandeService.getDemandesList().subscribe(
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
  modifierMessageDemande(demande: Demande) {
    // Appeler la fonction de service pour modifier le message
    this.demandeService.modifierMessageDemande(demande).subscribe(
      (response) => {
        console.log('Message modifié avec succès:', response);
      },
      (error) => {
        console.error(
          "Une erreur s'est produite lors de la modification du message :",
          error
        );
      }
    );
  }

  validerDemande(demande: Demande) {
    // Logique pour valider la demande
    console.log('Demande validée:', demande);
    this.demandeService.postDemande(demande);
  }

  rejeterDemande(demande: Demande) {
    // Logique pour rejeter la demande
    console.log('Demande rejetée:', demande);
  }
}
