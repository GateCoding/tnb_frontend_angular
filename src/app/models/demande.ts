import { Redevable } from './redevable';
import { Taxe } from './taxe';

export interface Demande {
  redevable: Redevable;
  taxe: Taxe;
  reponseDemande: string;
}
