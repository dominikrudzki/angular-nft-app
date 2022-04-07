import { Component } from '@angular/core'
import { map, Observable } from "rxjs"
import { Store } from "@ngrx/store"

@Component({
	selector: 'app-favourites-page',
	templateUrl: './favourites-page.component.html',
	styleUrls: ['./favourites-page.component.scss']
})
export class FavouritesPageComponent {
	favNftData$: Observable<any> = this.store.select(({favourites}) => favourites)

	constructor(private store: Store<{ favourites: any }>) {
	}

	filterValues(item: string) {
		this.favNftData$ = this.store.select(({favourites}) => favourites).pipe(
			map(res =>
				res.filter((val: any) =>
					val.name.toLowerCase().includes(item.toLowerCase())
				)
			)
		)
	}

}
