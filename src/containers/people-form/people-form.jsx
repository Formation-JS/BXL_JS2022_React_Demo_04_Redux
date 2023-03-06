import { useCallback, useId, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { peopleAdd } from '../../store/actions/people.action';

const PeopleForm = () => {

    const idForm = useId();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const firstnameInput = useRef();

    // Récuperation du « Dispatcher » pour interagir avec le store
    const dispatch = useDispatch();

    const handlePeopleSubmit = useCallback((e) => {
        e.preventDefault();

        const person = {
            firstname,
            lastname
        }

        // Envoi de l'action vers le store !
        const action = peopleAdd(person);
        dispatch(action);

        // Reset Form
        setFirstname('');
        setLastname('');
        firstnameInput.current.focus();
    });

    return (
        <form onSubmit={handlePeopleSubmit}>
            <div>
                <label htmlFor={idForm+'firstname'}>Prenom</label>
                <input id={idForm+'firstname'} type="text"
                    ref={firstnameInput}
                    value={firstname} 
                    onChange={(e) => setFirstname(e.target.value)} />
            </div>
            <div>
                <label htmlFor={idForm+'lastname'}>Nom</label>
                <input id={idForm+'lastname'} type="text" 
                    value={lastname} 
                    onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );

};

export default PeopleForm;