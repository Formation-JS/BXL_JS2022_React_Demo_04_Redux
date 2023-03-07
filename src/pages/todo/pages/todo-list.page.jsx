import { Link } from 'react-router-dom';

const TodoListPage = () => {

    return (
        <>
            <h2>Liste des taches (nb)</h2>
            <Link to='add'>Ajouter une tache</Link>

            ...
        </>
    )
}

export default TodoListPage;