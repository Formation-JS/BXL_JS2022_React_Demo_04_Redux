import NationalizeSearch from '../../containers/nationalize-search/nationalize-search';
import NationalizeResult from '../../containers/nationalize-result/nationalize-result';
import NationalizeList from '../../containers/nationalize-list/nationalize-list';

const NationalizePage = () => {

    return (
        <>
            <h1>Nationalize API demo</h1>
            <h2>Recherche : </h2>
            <NationalizeSearch />
            <NationalizeResult />

            <h2>Resultat sauvegarder</h2>
            <NationalizeList />
        </>
    );
};

export default NationalizePage;