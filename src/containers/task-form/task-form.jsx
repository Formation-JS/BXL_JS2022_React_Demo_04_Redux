import { useCallback, useId, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/slices/todo.slice.js';

const TaskForm = () => {

    const idForm = useId();
    const [name, setName] = useState('');
    const inputName = useRef();

    const dispatch = useDispatch();

    const handleTaskSubmit = useCallback((e) => {
        e.preventDefault();
        
        dispatch(addTask(name));

        setName('');
        inputName.current.focus();
    });

    return (
        <form onSubmit={handleTaskSubmit}>
            <div>
                <label htmlFor={idForm + 'name'}>Nom</label>
                <input ref={inputName} type="text" id={idForm + 'name'}
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <button type='submit'>Ajouter</button>
            </div>
        </form>

    );
};

export default TaskForm;