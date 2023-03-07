import { Link } from 'react-router-dom';
import TaskList from '../../../containers/task-list/task-list';

const TodoListPage = () => {

    return (
        <>
            <h2>Liste des taches (nb)</h2>
            <Link to='add'>Ajouter une tache</Link>
            <TaskList />
        </>
    )
}

export default TodoListPage;