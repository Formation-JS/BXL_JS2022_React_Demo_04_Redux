import { Outlet } from 'react-router-dom';

const PeoplePage = () => {

    return (
        <>
            <h1>Personnes...</h1>

            <Outlet />
        </>
    )
}

export default PeoplePage;