import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
	},
	{
		path: 'favourites',
		loadChildren: () => import('./pages/favourites-page/favourites-page.module').then(m => m.FavouritesPageModule)
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
