import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FavouritesPageComponent } from './favourites-page.component'
import { RouterModule } from "@angular/router"
import { SearchbarComponent } from './components/searchbar/searchbar.component'
import { SharedModule } from "../../shared/shared.module"
import { CoreModule } from "../../core/core.module"

@NgModule({
	declarations: [FavouritesPageComponent, SearchbarComponent],
	imports: [
		CommonModule,
		SharedModule,
		CoreModule,
		RouterModule.forChild([
			{path: '', component: FavouritesPageComponent}
		])
	]
})
export class FavouritesPageModule {
}
