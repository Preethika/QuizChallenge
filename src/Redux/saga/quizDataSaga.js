import { quizDataActions } from '../reducers/quizDataReducer';
import { filterActions } from '../reducers/filterReducer';
import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import callApiHelper from '../../Service/apiHelper';
import { baseURL } from '../../constants';
import { getFilter } from './selectors';

export default function* fetchQuizDataSaga() {
  try {
    const {amount, category, difficulty} = yield select(getFilter);
    const params = `amount=${amount}&category=${category}&difficulty=${difficulty}`;

    const response = yield call(
      callApiHelper,
      `${baseURL}?${params}`,
      {},
      'GET'
    );

    if (response.status === 200) {
      if (response.data) {
        yield put(quizDataActions.fetchQuizDataSuccess(response.data.results));
      } else {
        yield put(quizDataActions.fetchQuizDataFailure('No data found'));
      }
    }
    
  } catch (exception) {
    yield put(quizDataActions.fetchQuizDataFailure(exception));
  }
}