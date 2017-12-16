import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EncounterService } from './encounters/shared/encounter.service';
import { EncounterListComponent } from './encounters/encounter-list/encounter-list.component';
import { MaterialModule } from './material.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    EncounterListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    EncounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
