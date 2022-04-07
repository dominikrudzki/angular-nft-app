import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setState } from "./core/store/data/data.actions"
import { Subscription } from "rxjs"
import { ApiDataService } from "./core/services/api-data.service"

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	dataSub$: Subscription | undefined

	constructor(
		private ApiDataService: ApiDataService,
		private store: Store<{ data: any }>) {
	}

	ngOnInit() {
		this.dataSub$ = this.ApiDataService.getApiData().subscribe({
			next: ({assets}) => {
				this.store.dispatch(setState({data: assets}))
			}
		})
	}

	ngOnDestroy() {
		this.dataSub$?.unsubscribe()
	}
}
