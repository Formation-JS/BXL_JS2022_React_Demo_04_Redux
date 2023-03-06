import { useSelector } from 'react-redux';

const PeopleList = () => {

    const people = useSelector(state => state.people.data);

    return (
        <ul>
            {people.map((person) => (
                <li key={person.id}>{person.firstname} {person.lastname}</li>
            ))}
        </ul>
    );
};

export default PeopleList;