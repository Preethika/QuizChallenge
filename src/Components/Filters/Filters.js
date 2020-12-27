import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterActions } from '../../Redux/reducers/filterReducer';


export default function Filters() {
  const [difficulty, setDifficulty] = useState('easy');
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState(9);
  const dispatch = useDispatch();

  function onChange(e, x) {
    let { value } = e.target;

    if (x === 'amount') {
      value = parseInt(value);
      setAmount(value);
      dispatch(filterActions.updateFilter({
        amount: value, category, difficulty
      }));
    }
    else if (x === 'category') {
      value = parseInt(value);
      setCategory(value);
      dispatch(filterActions.updateFilter({
        amount, category: value, difficulty
      }));
    }
    else if (x === 'difficulty') {
      setDifficulty(value);
      dispatch(filterActions.updateFilter({
        amount, category, difficulty: value
      }));
    }
  }

  return (
    <div className="filtersWrapper">
      <p className="head-title">Filters</p>
      <div className="filters">
        <div className="widget">
          <p className="title">Num of questions</p>
          <select value={amount} onChange={(e) => onChange(e, 'amount')}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>

        <div className="widget">
          <p className="title">Category</p>
          <select value={category} onChange={(e) => onChange(e, 'category')}>
            <option value="9">GK</option>
            <option value="10">Books</option>
            <option value="11">Film</option>
          </select>
        </div>

        <div className="widget difficulty">
          <p className="title">Difficulty</p>
          <div className="radioGroup">
            <div className="radio">
              <label><input type="radio" name="optradio"
                value="easy"
                checked={difficulty === 'easy'}
                onChange={(e) => onChange(e, 'difficulty')} />Easy</label>
            </div>
            <div className="radio">
              <label><input type="radio" name="optradio"
                value="medium"
                checked={difficulty === 'medium'}
                onChange={(e) => onChange(e, 'difficulty')} />Medium</label>
            </div>
            <div className="radio">
              <label><input type="radio" name="optradio"
                value="hard"
                checked={difficulty === 'hard'}
                onChange={(e) => onChange(e, 'difficulty')} />Hard</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

