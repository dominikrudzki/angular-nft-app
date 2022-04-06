import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FavouritesPageComponent } from './favourites-page.component'
import { RouterModule } from "@angular/router"

@NgModule({
	declarations: [FavouritesPageComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{path: '', component: FavouritesPageComponent}
		])
	]
})
export class FavouritesPageModule {
}
