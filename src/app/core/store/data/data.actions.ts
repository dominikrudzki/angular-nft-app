import { createAction, props } from "@ngrx/store"

export const setState = createAction('[Data] Set', props<{ data: Array<any> }>())
