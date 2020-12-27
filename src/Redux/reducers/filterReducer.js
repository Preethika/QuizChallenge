import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';

const filterReducerSlice = createSlice({
  name: 'filterReducer',
  initialState: {
    filters: {
      amount: 10,
      category: 9,
      difficulty: 'easy'
    }
  },
  reducers: {
    updateFilter: (state, action) => {
      console.log('HEREE', action);
      state.filters = action.payload
    },
    fetchFilter: (state) => {
      state.isLoading = true
    }
  }
});

export const
  {
    actions: filterActions,
    reducer: filterReducer
  }
    = filterReducerSlice;