import { Categorie } from "./categorie";
import { Redevable } from "./redevable";
import { Taux } from "./taux";
import { Terrain } from "./terrain";

export class Taxe {
  id?: number;
  pay?: boolean;
  cost?: number;
  taux?: Taux;
  terrain?: Terrain;
  categorie?: Categorie;
  redevable?: Redevable;
  redevablecin?: string;
}