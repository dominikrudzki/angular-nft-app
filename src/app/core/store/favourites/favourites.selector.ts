import { createSelector } from "@ngrx/store"

export const selectFavorites = (state: Array<any>) => state

export const selectAllFavorites = createSelector(
	selectFavorites,
	(state: Array<any>) => state
)
