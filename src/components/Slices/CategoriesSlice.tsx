import { createSlice } from '@reduxjs/toolkit';

export const CategoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    types: [],
    selectedCategories: [], 
    chosenTypes: [], 
  },
  reducers: {
    setTypes: (state, { payload }) => {
      const types = payload;
      state.types = types;
    },
    setCategories: (state, { payload }) => {
      const categories = payload;
      state.categories = categories;
    },
    selectCategories: (state, { payload }) => {
      state.chosenTypes = [];
      const category = payload;
      const isSelected = state.selectedCategories.includes(category);
      
      if(!isSelected) {
        state.selectedCategories.push(category);
      } else {
        state.selectedCategories = state.selectedCategories.filter(
          (item) => item !== category
        );
      }
    },
    chooseTypes: (state, { payload }) => {
      state.selectedCategories = [];
      const type = payload;
      const isChosen = state.chosenTypes.includes(type);
      
      if(!isChosen) {
        state.chosenTypes = []
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