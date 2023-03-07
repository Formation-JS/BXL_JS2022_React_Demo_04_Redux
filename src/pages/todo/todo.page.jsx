const { Outlet } = require('react-router-dom');

const TodoPage = () => {

    return (
        <>
            <h1>Todo App</h1>

            <Outlet />
        </>
    )
}

export default TodoPage;