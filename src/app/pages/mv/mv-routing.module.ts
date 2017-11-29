import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MvLayoutComponent } from './mv-layout/mv-layout.component';
import { GoodComponent } from './good/good.component';
import { NeteaseComponent } from './netease/netease.component';
import { AllComponent } from './all/all.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'good',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MvLayoutComponent,
    children: [
      {
        path: 'good',
        component: GoodComponent
      },
      {
        path: 'netease',
        component: NeteaseComponent
      },
      {
        path: 'all',
        component: AllComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvRoutingModule {
}
