import { Link } from 'react-router-dom';
import PeopleList from '../../../containers/people-list/people-list';

const PeopleListPage = () => {

    return (
        <>
            <h2>Liste : </h2>  
            <Link to='add'>Ajouter une personne</Link>
            <PeopleList />
        </>
    )
}

export default PeopleListPage;