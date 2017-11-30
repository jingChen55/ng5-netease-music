import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-song-sheet',
  templateUrl: './song-sheet.component.html',
  styleUrls: ['./song-sheet.component.scss']
})
export class SongSheetComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  id: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params: Params) => {
      const { id } = params;
      this.id = id;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
