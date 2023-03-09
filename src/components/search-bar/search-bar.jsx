import { useId, useRef, useState } from 'react';

const SearchBar = ({onSearch}) => {

    const formId = useId();
    const [query, setQuery] = useState('');
    const inputQuery = useRef();

    const handleQuerySubmit = (e) => {
        e.preventDefault();
        onSearch(query);

        setQuery('');
        inputQuery.current.focus();
    }

    return (
        <form onSubmit={handleQuerySubmit}>
            <input id={formId + 'query'} 
                ref={inputQuery}
                value={query} 
                onChange={(e) => setQuery(e.target.value)} />
            <button type='submit'>Rechercher</button>
        </form>
    )
}

SearchBar.defaultProps = {
    onSearch: () => {}
};

export default SearchBar;