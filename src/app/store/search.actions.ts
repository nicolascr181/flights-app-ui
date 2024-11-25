import { createAction, props } from "@ngrx/store";
import { ISearchData } from "../interfaces/interfaces";

export const updateSearch = createAction(
    '[Search] Update Search',
    props<{ searchData: ISearchData }>()
);