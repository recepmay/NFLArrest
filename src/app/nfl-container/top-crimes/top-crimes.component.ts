import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../../shared/data.service';
import { CrimeModel } from '../../shared/crime.model';

@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.scss']
})
export class TopCrimesComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<CrimeModel[]>;
  displayedColumns = ['Category', 'Arrest Count'];
  values = ['Category', 'arrest_count'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  private spinnerFlag: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCrimes()
      .subscribe(response => {
        if (response) {
          this.dataSource = new MatTableDataSource(response);
          this.spinnerFlag = true;
        }
      }, error => console.log('Error occurred while fetching crimes!'));
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
