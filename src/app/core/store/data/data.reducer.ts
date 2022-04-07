import { createReducer, on } from "@ngrx/store"
import { setState } from "./data.actions"

const initialState: any[] = []

export const dataReducer = createReducer(
	initialState,
	on(setState, (state, data: any) => data)
)
