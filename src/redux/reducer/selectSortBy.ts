import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type SortByType = {
  sortBy: string;
};

const initialState: SortByType = {
  sortBy: 'alphabetical',
};

export const selectSortBy = createSlice({
  name: 'selectSortBy',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = selectSortBy.actions;

export default selectSortBy.reducer;
