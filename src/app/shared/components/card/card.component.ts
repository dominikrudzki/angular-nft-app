import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { addToFavorites, deleteFromFavorites } from "../../../core/store/favourites/favourites.actions"

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {
	@Input('details') nftDetails!: { data: any, action: 'add' | 'delete' }

	constructor(private store: Store<{ favourites: any }>) {
	}

	get data() {
		return this.nftDetails.data
	}

	handleClick() {
		switch (this.nftDetails.action) {
			case 'add':
				this.store.dispatch(addToFavorites(this.nftDetails.data))
				break
			case 'delete':
				console.log(this.nftDetails.data.id)
				this.store.dispatch(deleteFromFavorites({id: this.nftDetails.data.id}))
				break
		}

	}
}
