import { Categorie } from "./categorie";
import { Redevable } from "./redevable";

export class Terrain {
  id?: number;
  surface?: number;
  redevable?: Redevable; // Marked as optional
  categorie?: Categorie;
}