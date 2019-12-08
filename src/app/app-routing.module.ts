import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopCrimesComponent } from './nfl-container/top-crimes/top-crimes.component';
import { TopPlayersComponent } from './nfl-container/top-players/top-players.component';
import { TopTeamsComponent } from './nfl-container/top-teams/top-teams.component';
import { InfoPageComponent } from './nfl-container/info-page/info-page.component';
import { CrimeTimelineComponent } from './nfl-container/crime-timeline/crime-timeline.component';

const routes: Routes = [
  { path: '', component: InfoPageComponent},
  { path: 'Crimes', component: TopCrimesComponent},
  { path: 'Players', component: TopPlayersComponent},
  { path: 'Teams', component: TopTeamsComponent},
  { path: 'Timeline', component: CrimeTimelineComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
