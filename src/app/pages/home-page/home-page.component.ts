import { Component } from '@angular/core'
import { ApiDataService } from "../../core/services/api-data.service"
import { Observable } from "rxjs"
import { Store } from '@ngrx/store'

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
	nftData$: Observable<Array<{}>> = this.store.select(({data}) => data.data)

	constructor(
		private ApiDataService: ApiDataService,
		private store: Store<{ data: any }>) {
	}

}
