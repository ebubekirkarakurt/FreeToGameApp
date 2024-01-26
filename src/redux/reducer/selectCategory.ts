import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CategoryType = {
  category: string;
};

const initialState: CategoryType = {
  category: 'action',
};

export const selectCategory = createSlice({
  name: 'selectCategory',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = selectCategory.actions;

export default selectCategory.reducer;
