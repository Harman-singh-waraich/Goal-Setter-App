import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setGoal} from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(setGoal({text}))
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
            <button className="btn btn-block"
            type= "submit">
                Add Goal
            </button>
      
        </div>
        <img className="line" src="images/line.svg" alt="line"/>
            <img className="small-star" src="images/small-star.svg" alt="star"/>
      </form>
    </section>
  );
}

export default GoalForm;
