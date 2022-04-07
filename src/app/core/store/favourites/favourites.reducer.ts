import { createReducer, on } from "@ngrx/store"
import { addToFavorites, deleteFromFavorites } from "./favourites.actions"
import { Toast } from "../../../shared/sweatAlert"

const initialState: any[] = localStorage.getItem("favourites")
	? JSON.parse(localStorage.getItem("favourites") || "")
	: []

export const favouritesReducer = createReducer(
	initialState,
	on(addToFavorites, (state, item: any) => {
		if (state.findIndex(val => val.id === item.id) !== -1) {
			Toast.fire({
				icon: 'error',
				title: 'This NFT is already in your favourites list'
			})
			return state
		}

		Toast.fire({
			icon: 'success',
			title: 'Successfully added to your favourites list'
		})
		localStorage.setItem('favourites', JSON.stringify([item, ...state]))
		return [item, ...state]
	}),
	on(deleteFromFavorites, (state, {id}: { id: number }) => {
		const filteredData = state.filter(val => val.id !== id)
		localStorage.setItem('favourites', JSON.stringify(filteredData))
		return filteredData
	})
)
