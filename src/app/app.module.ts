import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import {StatsService} from "./stats.service";
import { HttpClientModule } from '@angular/common/http';
import { EntityComponent } from './entity/entity.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    LineChartComponent,
    EntityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
