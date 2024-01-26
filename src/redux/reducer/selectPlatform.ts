import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type PlatformType = {
  platform: string;
};

const initialState: PlatformType = {
  platform: 'all',
};

export const selectPlatform = createSlice({
  name: 'selectPlatform',
  initialState,
  reducers: {
    setPlatform: (state, actions: PayloadAction<string>) => {
      state.platform = actions.payload;
    },
  },
});

export const { setPlatform } = selectPlatform.actions;

export default selectPlatform.reducer;
