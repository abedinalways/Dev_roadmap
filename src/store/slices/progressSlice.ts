import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProgressState {
  completedSections: string[];
  currentSection: string | null;
}

const initialState: ProgressState = {
  completedSections: [],
  currentSection: null,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    completeSection: (state, action: PayloadAction<string>) => {
      if (!state.completedSections.includes(action.payload)) {
        state.completedSections.push(action.payload);
      }
    },
    setCurrentSection: (state, action: PayloadAction<string | null>) => {
      state.currentSection = action.payload;
    },
    resetProgress: (state) => {
      state.completedSections = [];
      state.currentSection = null;
    },
  },
});

export const { completeSection, setCurrentSection, resetProgress } = progressSlice.actions;
export default progressSlice.reducer;
