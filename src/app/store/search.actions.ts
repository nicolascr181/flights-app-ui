import { createAction, props } from "@ngrx/store";
import { ISearchData } from "../interfaces/index";

export const updateSearch = createAction(
    '[Search] Update Search',
    props<{ searchData: ISearchData }>()
);