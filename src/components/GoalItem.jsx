import {useDispatch} from 'react-redux'
import {deleteGoal} from '../features/goals/goalSlice'

function GoalItem({goal}) {
    const dispatch = useDispatch();
  return (
    <div className="goal">
        <button onClick={()=>{dispatch(deleteGoal(goal._id))}} className="close">X</button>

        <div>
            {new Date(goal.createdAt).toLocaleString('en-US')}
        </div>
        <h3>{goal.text}</h3>
    </div>
  )
}

export default GoalItem