import { call, put, takeLatest } from 'redux-saga/effects';
import {quizDataActions, quizDataReducer} from '../reducers/quizDataReducer';
import fetchQuizDataSaga from './quizDataSaga';

export default function* rootSaga() {

  yield takeLatest(quizDataActions.fetchQuizData.type, fetchQuizDataSaga);
}