import { combineReducers } from 'redux';
import {filterReducer} from './filterReducer';
import {quizDataReducer} from './quizDataReducer';

export const reducer = combineReducers({
  filterReducer,
  quizDataReducer
});