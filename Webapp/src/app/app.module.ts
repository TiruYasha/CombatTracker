import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EncounterService } from './encounters/shared/encounter.service';
import { EncounterListComponent } from './encounters/encounter-list/encounter-list.component';
import { MaterialModule } from './material.module';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { EncounterDetailComponent } from './encounters/encounter-detail/encounter-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EncounterListComponent,
    EncounterDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    EncounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
