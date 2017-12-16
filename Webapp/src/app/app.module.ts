import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http/src/module';
import { EncounterService } from './encounters/shared/encounter.service';
import { ConfigService } from './shared/config.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    EncounterService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
