import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomePageComponent } from './home-page.component'
import { RouterModule } from "@angular/router";
import { SearchbarComponent } from './components/searchbar/searchbar.component'

@NgModule({
	declarations: [HomePageComponent, SearchbarComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{path: '', component: HomePageComponent}
		])
	]
})
export class HomePageModule {
}
