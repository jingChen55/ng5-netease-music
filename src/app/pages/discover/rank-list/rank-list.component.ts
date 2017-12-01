import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.scss']
})
export class RankListComponent implements OnInit {
  loading: boolean;

  constructor() {
    this.loading = false;
  }

  ngOnInit() {

  }

}
