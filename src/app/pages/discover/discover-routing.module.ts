import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverLayoutComponent} from './discover-layout/discover-layout.component';
import { SuggestComponent} from './suggest/suggest.component';
import { RankListComponent} from './rank-list/rank-list.component';
import { SongSheetComponent} from './song-sheet/song-sheet.component';
import { AnchorRadioComponent} from './anchor-radio/anchor-radio.component';
import { LatestMusicComponent} from './latest-music/latest-music.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'suggest',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DiscoverLayoutComponent,
    children: [
      {
        path: 'suggest',
        component: SuggestComponent
      },
      {
        path: 'rank-list',
        component: RankListComponent
      },
      {
        path: 'song-sheet',
        component: SongSheetComponent
      },
      {
        path: 'anchor-radio',
        component: AnchorRadioComponent
      },
      {
        path: 'latest-music',
        component: LatestMusicComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverRoutingModule { }
