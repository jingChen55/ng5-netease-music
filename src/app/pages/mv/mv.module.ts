import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvRoutingModule } from './mv-routing.module';
import { GoodComponent } from './good/good.component';
import { NeteaseComponent } from './netease/netease.component';
import { AllComponent } from './all/all.component';
import { MvLayoutComponent } from './mv-layout/mv-layout.component';

@NgModule({
  imports: [
    CommonModule,
    MvRoutingModule
  ],
  declarations: [GoodComponent, NeteaseComponent, AllComponent, MvLayoutComponent]
})
export class MvModule { }
