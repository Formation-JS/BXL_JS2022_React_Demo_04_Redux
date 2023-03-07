
// Mockup de donnée (A delete !!!)
// import fakeData from './mockup.json';

import { useDispatch, useSelector } from 'react-redux';
import { finishTask } from '../../store/slices/todo.slice.js';

const TaskListHead = () => (
    <thead>
        <tr>
            <th>Nom</th>
            <th>Etat</th>
            <th></th>
        </tr>
    </thead>
);

const TaskListRow = ({ id, name, isDone }) => {

    const dispatch = useDispatch();

    return (
        <tr>
            <td>{name}</td>
            <td>{isDone ? '🟢' : '⚪'}</td>
            <td>
                <button
                    onClick={() => dispatch(finishTask(id))}
                    disabled={isDone}>
                    Fait
                </button>
            </td>
        </tr>
    );
};

const TaskList = () => {

    const tasks = useSelector(state => state.todo.tasks);

    return (
        <table>
            <TaskListHead />
            <tbody>
                {tasks.map(task => <TaskListRow {...task} key={task.id} />)}
            </tbody>
        </table>
    );
};

export default TaskList;