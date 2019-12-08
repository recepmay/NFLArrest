import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { CrimeModel } from '../../shared/crime.model';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import Chart from 'chart.js';

@Component({
  selector: 'app-crime-timeline',
  templateUrl: './crime-timeline.component.html',
  styleUrls: ['./crime-timeline.component.scss']
})
export class CrimeTimelineComponent implements OnInit {

  private crimes: CrimeModel[];
  private crimeNames: string[];
  private timelineData: any[] = [];
  private years: any[] = [];

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCrimes()
      .subscribe(response => {
        if (response) {
          this.crimes = response;
          this.crimeNames = this.crimes.map( item => item.Category);

          this.filteredOptions = this.myControl.valueChanges
            .pipe(
              startWith(''),
              map(value => this._filter(value))
            );
        }
      }, error => console.log('Error occurred while fetching crimes!'));
  }

  selectCrime(name) {
    this.dataService.getCrimeTimeline(name)
      .subscribe(response => {
        if (response) {
          // group all data by year
          this.timelineData = response.reduce<any>((groups, item) => ({
            ...groups,
            [item.Year]: [...(groups[item.Year] || []), item]
          }), {});

          this.years = [];

          for (let key in this.timelineData) {
            this.years.push(key);
          }

          console.log(this.years);
        }
      }, error => console.log('Error occurred while fetching crimes!'));
  }

  selectYear(year) {
    let ctx;
    let BarChart;
    const selected = this.timelineData[year];
    const labels = selected.map( item => item.Month);
    const data = selected.map( item => item.arrest_count);

    ctx = document.getElementById('myChart');
    BarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: '# of Crimes',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.crimeNames.filter(option => option.toLowerCase().includes(filterValue));
  }

}
