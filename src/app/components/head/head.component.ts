import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/index';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  detail: any;
  userDetailVisible = false;

  constructor(private store: Store<State>) {
    this.store.select('user').subscribe((userState: any) => {
      if (userState) {
        this.detail = userState.userDetail;
      }
    });
  }

  ngOnInit() {
  }

}
