import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedevableComponent } from './components/redevable/redevable.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, RedevableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
