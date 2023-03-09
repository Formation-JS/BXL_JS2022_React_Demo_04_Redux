import { useDispatch, useSelector } from 'react-redux';
import NationalizeDisplay from '../../components/nationalize-display/nationalize-display';
import { removeResult } from '../../store/actions/nationalize.action';

const NationalizeList = () => {
    const savedResults = useSelector(state => state.nationalize.savedResults);
    const dispatch = useDispatch();

    return (
        <>
            {savedResults.map(result => (
                <NationalizeDisplay
                    key={result.name}
                    result={result}
                    action='Supprimer'
                    onAction={() => dispatch(removeResult(result.name))} />
            ))}
        </>
    );
};

export default NationalizeList;