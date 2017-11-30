import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/index';
import { UserPlayList, UserDetail } from '../../store/actions/user.action';
import { UserService } from '../../services/user.service';

// 这个组件不输出内容, 仅是集中执行init操作
@Component({
  selector: 'app-init-app',
  template: '<span style="display: none"><span>',
  providers: [UserService]
})
export class InitAppComponent implements OnInit {
  demoUid: number = 333779440;

  constructor(public store: Store<State>, private userSrv: UserService) {
  }

  ngOnInit() {
    this.getUserPlayList();
    this.getUserDetail();
  }

  getUserPlayList() {
    this.userSrv.getUserPlayList(this.demoUid)
      .then(res => {
        if (res.code === 200) {
          this.store.dispatch(new UserPlayList({
            'userPlayList': res.playlist
          }))
        } else {
          // throw error
        }
      })
  }

  getUserDetail() {
    this.userSrv.getUserDetail(this.demoUid)
      .then(res => {
        if (res.code === 200) {
          this.store.dispatch(new UserDetail({
            'userDetail': res
          }))
        } else {
          // throw error
        }
      })
  }
}
