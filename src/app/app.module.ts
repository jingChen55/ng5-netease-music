import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';

// 3rd
import { ClickOutsideModule } from 'ng-click-outside';

// redux
import { Store, StoreModule } from '@ngrx/store';
import { reducers, initialState } from './store/index';

import { ElectronService } from './services/electron.service';
import { FullComponent } from './layouts/full/full.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HeadComponent } from './components/head/head.component';
import { FootComponent } from './components/foot/foot.component';
import { SideComponent } from './components/side/side.component';
import { PersonalFmComponent } from './pages/personal-fm/personal-fm.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { ItunesComponent } from './pages/itunes/itunes.component';
import { MyRadioComponent } from './pages/my-radio/my-radio.component';
import { SongSheetComponent } from './pages/song-sheet/song-sheet.component';
import { MyMusicComponent } from './pages/my-music/my-music.component';
import { InitAppComponent } from './pages/init-app/init-app.component';
import { SystemSettingComponent } from './pages/system-setting/system-setting.component';
import { UserSettingComponent } from './pages/user-setting/user-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    DefaultComponent,
    HeadComponent,
    FootComponent,
    SideComponent,
    PersonalFmComponent,
    FriendsComponent,
    ItunesComponent,
    MyRadioComponent,
    SongSheetComponent,
    MyMusicComponent,
    InitAppComponent,
    SystemSettingComponent,
    UserSettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ClickOutsideModule,
    SharedModule,
    StoreModule.forRoot(reducers, <any>initialState)
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
