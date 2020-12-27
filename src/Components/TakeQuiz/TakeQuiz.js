import React, { useEffect } from 'react';
import List from '../List/List';
import Filters from '../Filters/Filters';
import Review from '../Review/Review';
import { useDispatch, useSelector } from 'react-redux';
import { quizDataActions } from '../../Redux/reducers/quizDataReducer';

export default function TakeQuiz() {
  const dispatch = useDispatch();
  const { filters } = useSelector(state => state.filterReducer);
  const { quizData } = useSelector(state => state.quizDataReducer);

  function onSubmit() {
    dispatch(quizDataActions.fetchQuizData());
    console.log('filters take quiz', filters);
  }

  return (<>
    <Filters />
    <button onClick={onSubmit}>Generate Quiz questions</button>
    {quizData && quizData.length > 0 && <List list={quizData} />}
  </>
  )
}


