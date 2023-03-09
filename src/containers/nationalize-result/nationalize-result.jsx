import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NationalizeDisplay from '../../components/nationalize-display/nationalize-display';
import { saveResult } from '../../store/actions/nationalize.action';


const NationalizeResult = () => {
    const dispatch = useDispatch();
    const result = useSelector(state => state.nationalize.result);

    const handleSave = useCallback(() => {
        dispatch(saveResult());
    });

    return (
        <NationalizeDisplay
            result={result}
            action='Sauvegarder'
            onAction={handleSave} />
    );
};

export default NationalizeResult;