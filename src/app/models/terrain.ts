import { Categorie } from './categorie';
import { Taxe } from './taxe';

export class Terrain {
  id?: number;
  surface?: number;
  redevablecin?: string; // Marked as optional
  categorie?: Categorie;
  taxes?: Taxe[];
}
