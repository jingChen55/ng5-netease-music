import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadRoutingModule } from './download-routing.module';
import { FinishedComponent } from './finished/finished.component';
import { DoingComponent } from './doing/doing.component';
import { DownloadLayoutComponent } from './download-layout/download-layout.component';

@NgModule({
  imports: [
    CommonModule,
    DownloadRoutingModule
  ],
  declarations: [FinishedComponent, DoingComponent, DownloadLayoutComponent]
})
export class DownloadModule {
}
