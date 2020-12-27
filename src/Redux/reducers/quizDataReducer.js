import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';

const quizDataSlice = createSlice({
  name: 'quizDataReducer',
  initialState: {
    quizData: [],
    isLoading: false,
    error: false
  },
  reducers: {
    fetchQuizData: (state) => {
     
      state.isLoading = true;
    },
    fetchQuizDataSuccess: (state, action) => {
      console.log('fetchQuizData ', action);
      state.isLoading = true;
      state.quizData = action.payload;
    },
    fetchQuizDataFailure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  }
});

export const {
  actions: quizDataActions,
  reducer: quizDataReducer
}
  = quizDataSlice;