import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from "./shared/shared.module"
import { HttpClientModule } from "@angular/common/http"
import { CoreModule } from "./core/core.module"
import { StoreModule } from "@ngrx/store"
import { favouritesReducer } from './core/store/favourites/favourites.reducer'
import { dataReducer } from "./core/store/data/data.reducer"
import { NavbarModule } from "./features/navbar/navbar.module"

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NavbarModule,
		CoreModule,
		StoreModule.forRoot({
			favourites: favouritesReducer,
			data: dataReducer
		}),
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
