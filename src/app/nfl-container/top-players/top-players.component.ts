import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../../shared/data.service';
import { PlayerModel } from '../../shared/player.model';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.scss']
})
export class TopPlayersComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<PlayerModel>;
  displayedColumns = ['Name', 'Team', 'Team Name', 'Team City', 'Position', 'Arrest Count'];
  values = ['Name', 'Team', 'Team_name', 'Team_city', 'Position', 'arrest_count'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  private spinnerFlag: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPlayers()
      .subscribe(response => {
        if (response) {
          this.dataSource = new MatTableDataSource<PlayerModel>(response);
          this.spinnerFlag = true;
        }
      }, error => console.log('Error occurred while fetching players!'));
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
