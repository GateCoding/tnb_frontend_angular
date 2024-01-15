import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RedevableComponent } from './components/redevable/redevable.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateRedevableComponent } from './components/update-redevable/update-redevable.component';
import { TaxeComponent } from './components/taxe/taxe.component';
import { TerrainComponent } from './components/terrain/terrain.component';
import { TaxeTnbComponent } from './components/taxe-tnb/taxe-tnb.component';
import { DemandeComponent } from './components/demande/demande.component';

@NgModule({
  declarations: [
    AppComponent,
    RedevableComponent,
    UpdateRedevableComponent,
    TaxeComponent,
    TerrainComponent,
    TaxeTnbComponent,
    DemandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
