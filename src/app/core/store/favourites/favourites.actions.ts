import { createAction, props } from "@ngrx/store"

export const addToFavorites = createAction('[Favorites] Add', props<{ item: any }>())
export const deleteFromFavorites = createAction('[Favorites] Delete', props<{ id: number }>())
