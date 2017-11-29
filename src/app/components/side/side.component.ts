import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
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

  created = [
    {
      name: '我喜欢的音乐',
      icon: 'icon-like',
      url: ''
    },
    {
      name: '战车',
      icon: 'icon-list',
      url: ''
    },
    {
      name: '鸡血',
      icon: 'icon-list',
      url: ''
    },
    {
      name: '上班',
      icon: 'icon-list',
      url: ''
    },
    {
      name: 'RUNNING',
      icon: 'icon-list',
      url: ''
    },
    {
      name: '念佛三味',
      icon: 'icon-list',
      url: ''
    },
    {
      name: '佛说万物生',
      icon: 'icon-list',
      url: ''
    },
    {
      name: '心中的菩提',
      icon: 'icon-list',
      url: ''
    }
  ];

  colletions = [
    {
      name: 'Hard Trap|暴躁的高频Bass硬陷阱',
      icon: 'icon-list',
      url: ''
    },
    {
      name: '如是我闻—寺院版',
      icon: 'icon-list',
      url: ''
    },
    {
      name: '程序员的音符',
      icon: 'icon-list',
      url: ''
    },
    {
      name: '『韩语』夜跑必备节奏超强',
      icon: 'icon-list',
      url: ''
    },
    {
      name: '跑步时听的兴奋剂',
      icon: 'icon-list',
      url: ''
    },
    {
      name: '燃烧吧代码! // <程序员专属歌单>',
      icon: 'icon-list',
      url: ''
    },
    {
      name: '打了鸡血的程序猿 背景纯音乐',
      icon: 'icon-list',
      url: ''
    },
    {
      name: '华语乐坛，一人一种撕心裂肺。',
      icon: 'icon-list',
      url: ''
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goPage(routeName: string): void {
    this.router.navigate([routeName]);
  }
}
