import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mv-layout',
  templateUrl: './mv-layout.component.html',
  styleUrls: ['./mv-layout.component.scss']
})
export class MvLayoutComponent implements OnInit {
  navis = [
    {
      name: 'MV精选',
      route: 'good'
    },
    {
      name: '网易独家',
      route: 'netease'
    },
    {
      name: '全部MV',
      route: 'all'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
