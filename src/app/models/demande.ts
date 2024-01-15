import { Redevable } from './redevable';
import { Taxe } from './taxe';

export interface Demande {
  id?: number;
  redevable: string;
  taxe: number;
  reponseDemande: string;
}
