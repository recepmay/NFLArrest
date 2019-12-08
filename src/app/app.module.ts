import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataService } from './shared/data.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

import { TopCrimesComponent } from './nfl-container/top-crimes/top-crimes.component';
import { TopPlayersComponent } from './nfl-container/top-players/top-players.component';
import { TopTeamsComponent } from './nfl-container/top-teams/top-teams.component';
import { NflContainerComponent } from './nfl-container/nfl-container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InfoPageComponent } from './nfl-container/info-page/info-page.component';
import { CrimeTimelineComponent } from './nfl-container/crime-timeline/crime-timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    TopCrimesComponent,
    TopPlayersComponent,
    TopTeamsComponent,
    NflContainerComponent,
    HeaderComponent,
    FooterComponent,
    InfoPageComponent,
    CrimeTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [
    HttpClient,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
