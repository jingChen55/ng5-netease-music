import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestRoutingModule } from './suggest-routing.module';
import { DiscoverComponent } from './discover/discover.component';
import { FmComponent } from './fm/fm.component';
import { MvComponent } from './mv/mv.component';
import { FriendsComponent } from './friends/friends.component';

@NgModule({
  imports: [
    CommonModule,
    SuggestRoutingModule
  ],
  declarations: [DiscoverComponent, FmComponent, MvComponent, FriendsComponent]
})
export class SuggestModule { }
