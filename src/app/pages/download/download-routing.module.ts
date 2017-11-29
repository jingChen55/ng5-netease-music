import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadLayoutComponent } from './download-layout/download-layout.component';
import { FinishedComponent } from "./finished/finished.component";
import { DoingComponent } from './doing/doing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'finished',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DownloadLayoutComponent,
    children: [
      {
        path: 'finished',
        component: FinishedComponent
      },
      {
        path: 'doing',
        component: DoingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadRoutingModule {
}
