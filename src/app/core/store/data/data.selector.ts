import { createSelector } from "@ngrx/store"

export const selectData = (state: Array<any>) => state

export const selectAllData = createSelector(
	selectData,
	(state: Array<any>) => state
)
