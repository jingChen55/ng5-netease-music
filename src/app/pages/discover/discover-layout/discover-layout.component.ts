import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover-layout',
  templateUrl: './discover-layout.component.html',
  styleUrls: ['./discover-layout.component.scss']
})
export class DiscoverLayoutComponent implements OnInit {
  channels = [
    {
      name: '推荐',
      route: 'suggest'
    },
    {
      name: '排行榜',
      route: 'rank-list'
    },
    {
      name: '歌单',
      route: 'song-sheet'
    },
    {
      name: '主播电台',
      route: 'anchor-radio'
    },
    {
      name: '最新音乐',
      route: 'latest-music'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
