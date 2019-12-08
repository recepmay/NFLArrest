import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../../shared/data.service';
import { TeamModel } from '../../shared/team.model';

@Component({
  selector: 'app-top-teams',
  templateUrl: './top-teams.component.html',
  styleUrls: ['./top-teams.component.scss']
})
export class TopTeamsComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<TeamModel[]>;
  displayedColumns = ['Team', 'Team Preffered Name', 'Team Name', 'Team City',
    'Team Conference', 'Team Conference Division', 'Team Logo ID', 'Arrest count'];
  values = ['Team', 'Team_preffered_name', 'Team_name', 'Team_city',
    'Team_Conference', 'Team_Conference_Division', 'Team_logo_id', 'arrest_count'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  private spinnerFlag: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTeams()
      .subscribe(response => {
        if (response) {
          this.dataSource = new MatTableDataSource(response);
          this.spinnerFlag = true;
        }
      }, error => console.log('Error occurred while fetching teams!'));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterResults(keyword: string) {
    keyword = keyword.trim();
    keyword = keyword.toLowerCase();
    this.dataSource.filter = keyword;
  }
}
