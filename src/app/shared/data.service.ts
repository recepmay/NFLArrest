import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CrimeModel } from '../shared/crime.model';
import { PlayerModel } from '../shared/player.model';
import { TeamModel } from '../shared/team.model';
import { CrimeTimelineModel } from '../shared/crime-timeline.model';

@Injectable()
export class DataService {

  private crimeEndPoint: string = 'http://nflarrest.com/api/v1/crime';
  private playerEndPoint: string = 'http://nflarrest.com/api/v1/player';
  private teamEndPoint: string = 'http://nflarrest.com/api/v1/team';
  private crimeTimelineEndPoint: string = 'http://nflarrest.com/api/v1/crime/timeline/';

  constructor( private http: HttpClient ) { }

  getCrimes() {
    return this.http.get<CrimeModel[]>(this.crimeEndPoint)
      .pipe();

  }

  getPlayers() {
    return this.http.get<PlayerModel[]>(this.playerEndPoint)
      .pipe();
  }

  getTeams() {
    return this.http.get<TeamModel[]>(this.teamEndPoint)
      .pipe();
  }

  getCrimeTimeline(name) {
    const url = `${this.crimeTimelineEndPoint}/${name}`;
    return this.http.get<CrimeTimelineModel[]>(url)
      .pipe();
  }
}
