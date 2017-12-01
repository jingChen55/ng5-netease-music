import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { DiscoverRoutingModule } from './discover-routing.module';
import { SuggestComponent } from './suggest/suggest.component';
import { DiscoverLayoutComponent } from './discover-layout/discover-layout.component';
import { RankListComponent } from './rank-list/rank-list.component';
import { AnchorRadioComponent } from './anchor-radio/anchor-radio.component';
import { LatestMusicComponent } from './latest-music/latest-music.component';
import { SongSheetComponent } from './song-sheet/song-sheet.component';

@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    SharedModule
  ],
  declarations: [
    SuggestComponent,
    DiscoverLayoutComponent,
    RankListComponent,
    AnchorRadioComponent,
    LatestMusicComponent,
    SongSheetComponent
  ]
})
export class DiscoverModule {
}
