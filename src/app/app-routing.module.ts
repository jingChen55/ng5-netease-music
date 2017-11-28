import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { DefaultComponent } from './layouts/default/default.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'suggest/discover',
		pathMatch: 'full',
	},
	{
		path: '',
		component: DefaultComponent,
		children: [
			{
				path: 'suggest',
				loadChildren: './pages/suggest/suggest.module#SuggestModule'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
