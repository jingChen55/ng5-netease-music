import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../store/index';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  userPlayList: any;
  suggests = [
    {
      name: '发现音乐',
      icon: 'icon-music',
      route: 'discover'
    },
    {
      name: '私人FM',
      icon: 'icon-fm',
      route: 'personal-fm'
    },
    {
      name: 'MV',
      icon: 'icon-mv',
      route: 'mv'
    },
    {
      name: '朋友',
      icon: 'icon-friends',
      route: 'friends'
    }
  ];

  myMusics = [
    {
      name: 'iTunes音乐',
      icon: 'icon-itunes',
      route: 'itunes'
    },
    {
      name: '下载的音乐',
      icon: 'icon-download',
      route: 'download'
    },
    {
      name: '我的电台',
      icon: 'icon-radio',
      route: 'my-radio'
    }
  ];

  // 创建的歌单
  created = [];

  // 收藏的歌单
  colletions = [];

  constructor(private router: Router, private store: Store<State>) {
  }

  ngOnInit() {
    this.userPlayList = this.store.select('user').subscribe((userState: any) => {
      if (userState) {
        const { userPlayList } = userState;
        userPlayList.map(item => {
          if (item.subscribed) {
            item.icon = 'icon-list';
            this.colletions.push(item);
          } else {
            item.icon = item.specialType === 0 ? 'icon-list' : 'icon-like';
            this.created.push(item);
          }
        })
      }
    });
  }

  goPage(routeName: string): void {
    this.router.navigate([routeName]);
  }

  // 携带id跳转到歌单页
  goSongSheet(id): void {
    this.router.navigate(['song-sheet', id]);
  }
}
