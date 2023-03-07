import App from '../App';
import AboutPage from '../pages/about/about.page';
import HomePage from '../pages/home/home.page';
import PeopleFormPage from '../pages/people/pages/people-form.page';
import PeopleListPage from '../pages/people/pages/people-list.page';
import PeoplePage from '../pages/people/people.page';
import TodoFormPage from '../pages/todo/pages/todo-form.page';
import TodoListPage from '../pages/todo/pages/todo-list.page';
import TodoPage from '../pages/todo/todo.page';
// Définition des routes de l'application
const route = [
    {
        // ↓ Permet de définir le "layout" de l'app
        path: '',
        element: <App />, 
        // ↓ Les pages de l'app
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'people',
                element: <PeoplePage />,
                children: [
                    {
                        index: true,
                        element: <PeopleListPage />
                    },
                    {
                        path: 'add',
                        element: <PeopleFormPage />
                    }
                ]
            },
            {
                path: 'todo',
                element: <TodoPage />,
                children: [
                    {
                        index: true,
                        element: <TodoListPage />
                    },
                    {
                        path: 'add',
                        element: <TodoFormPage />
                    }
                ]
            },
            {
                path: 'about',
                element: <AboutPage />
            }
        ]
    }
]

export default route;