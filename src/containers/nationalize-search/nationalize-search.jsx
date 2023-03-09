import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '../../components/search-bar/search-bar';
import { fetchResult } from '../../store/actions/nationalize.action';

const NationalizeSearch = () => {

    const dispatch = useDispatch();

    const handleSearch = useCallback((query) => {
        dispatch(fetchResult(query));
    });

    return(
        <SearchBar onSearch={handleSearch}/>
    )
}

export default NationalizeSearch;