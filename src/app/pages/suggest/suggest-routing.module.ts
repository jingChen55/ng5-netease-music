import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverComponent } from '../suggest/discover/discover.component';
import { FmComponent } from '../suggest/fm/fm.component';
import { FriendsComponent } from '../suggest/friends/friends.component';
import { MvComponent } from '../suggest/mv/mv.component';

const routes: Routes = [
  {
    path: 'discover',
    component: DiscoverComponent
  },
  {
    path: 'fm',
    component: FmComponent
  },
  {
    path: 'friends',
    component: FriendsComponent
  },
  {
    path: 'mv',
    component: MvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestRoutingModule { }
