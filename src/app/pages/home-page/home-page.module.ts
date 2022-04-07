import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomePageComponent } from './home-page.component'
import { RouterModule } from "@angular/router"
import { CoreModule } from "../../core/core.module"
import { SharedModule } from "../../shared/shared.module"

@NgModule({
	declarations: [HomePageComponent],
	imports: [
		CommonModule,
		CoreModule,
		SharedModule,
		RouterModule.forChild([
			{path: '', component: HomePageComponent}
		])
	]
})
export class HomePageModule {
}
