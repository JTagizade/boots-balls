import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoriesState {
    categories: string[]; 
    types: string[]; 
    selectedCategories: string[];
    chosenTypes: string[];
}

const initialState: CategoriesState = {
    categories: [],
    types: [],
    selectedCategories: [],
    chosenTypes: [],
};

export const CategoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setTypes: (state, { payload }: PayloadAction<string[]>) => {
            state.types = payload;
        },
        setCategories: (state, { payload }: PayloadAction<string[]>) => {
            state.categories = payload;
        },
        selectCategories: (state, { payload }: PayloadAction<string>) => {
            state.chosenTypes = [];
            const category = payload;
            const isSelected = state.selectedCategories.includes(category);
            
            if (!isSelected) {
                state.selectedCategories.push(category);
            } else {
                state.selectedCategories = state.selectedCategories.filter(
                    (item) => item !== category
                );
            }
        },
        chooseTypes: (state, { payload }: PayloadAction<string>) => {
            state.selectedCategories = [];
            const type = payload;
            const isChosen = state.chosenTypes.includes(type);
            
            if (!isChosen) {
                state.chosenTypes = [];
                state.chosenTypes.push(type);
            } else {
                state.chosenTypes = state.chosenTypes.filter(
                    (item) => item !== type
                );
            }
        },
        clearFilters: (state) => {
            state.selectedCategories = [];
            state.chosenTypes = [];
        }
    },
});

export const { setTypes, setCategories, selectCategories, chooseTypes, clearFilters } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
