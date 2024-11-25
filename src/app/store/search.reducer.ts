import { createFeature, createReducer, on } from "@ngrx/store";
import { updateSearch } from "./search.actions";
import { ISearchData } from "../interfaces/index";

export interface SearchState {
    searchData: ISearchData | null;
}

export const initialState: SearchState = {
    searchData: null,
};

export const searchFeature = createFeature({
    name: 'search', // This is the feature name
    reducer: createReducer(
        initialState,
        on(updateSearch, (state, { searchData }) => ({ ...state, searchData }))
    ),
});

export const {
    selectSearchState,
    selectSearchData,
} = searchFeature;
