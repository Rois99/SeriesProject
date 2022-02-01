import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series/series.component';
import { SeriesesComponent } from './components/serieses/serieses.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SeasonComponent } from './components/season/season.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeriesesComponent,
    SeasonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
