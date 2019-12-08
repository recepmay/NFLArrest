import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private menuItems: string[] = ['Crimes', 'Players', 'Teams', 'Timeline'];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  jumpToSelected(i) {
    this.router.navigate(['/' + this.menuItems[i]]);
  }
}
