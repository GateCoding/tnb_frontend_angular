import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedevableComponent } from './components/redevable/redevable.component';
// import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { UpdateRedevableComponent } from './components/update-redevable/update-redevable.component';
import { TaxeComponent } from './components/taxe/taxe.component';
import { TaxeTnbComponent } from './components/taxe-tnb/taxe-tnb.component';
import { TerrainComponent } from './components/terrain/terrain.component';
// import { UpdateTerrainComponent } from './update-terrain/update-terrain.component';
// import { TauxComponent } from './taux/taux.component';
// import { UpdateTauxComponent } from './update-taux/update-taux.component';
// import { TaxetnbComponent } from './taxetnb/taxetnb.component';

const routes: Routes = [
  { path: 'redevable', component: RedevableComponent },
  { path: 'terrain', component: TerrainComponent },
  // { path: 'taux', component: TauxComponent },
  { path: 'taxe', component: TaxeComponent },
  { path: 'taxe-terrain/:id', component: TaxeTnbComponent },
  { path: 'update-redevable/:id', component: UpdateRedevableComponent },
  { path: 'taxe-redevable/:cin', component: TaxeComponent },
  //   { path: 'update-terrain/:id', component: UpdateTerrainComponent },
  //   { path: 'update-taux/:id', component: UpdateTauxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
