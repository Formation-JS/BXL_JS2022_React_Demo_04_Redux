
// Mockup de donnée (A delete !!!)
import fakeData from './mockup.json';

const TaskListHead = () => (
    <thead>
        <tr>
            <th>Nom</th>
            <th>Etat</th>
            <th></th>
        </tr>
    </thead>
);

const TaskListRow = ({ id, title, isDone, onFinish }) => (
    <tr>
        <td>{title}</td>
        <td>{isDone ? '🟢' : '⚪'}</td>
        <td>
            <button
                onClick={() => onFinish(id)}
                disabled={isDone}>
                Fait
            </button>
        </td>
    </tr>
);

const TaskList = () => {

    // TODO : Replace FakeData with data to use :o

    return (
        <table>
            <TaskListHead />
            <tbody>
                {fakeData.map(task => <TaskListRow {...task} key={task.id} />)}
            </tbody>
        </table>
    );
};

export default TaskList;