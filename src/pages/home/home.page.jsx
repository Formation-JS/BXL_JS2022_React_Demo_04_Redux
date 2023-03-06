import { useSelector } from 'react-redux';

const HomePage = () => {

    const nbPerson = useSelector(state => state.people.count);

    return (
        <>
            <h1>Accueil</h1>
            <p>Nombre de personnes : {nbPerson}</p>
        </>
    )
}

export default HomePage;