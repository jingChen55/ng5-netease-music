import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() visible: boolean;
  @Input() type: string;
  @Input() title: string;

  constructor() {
    this.visible = true;
    this.title = '加载中...'
  }

  ngOnInit() {
  }

}
