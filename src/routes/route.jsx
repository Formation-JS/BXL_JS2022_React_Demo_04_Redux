import App from '../App';
import AboutPage from '../pages/about/about.page';
import HomePage from '../pages/home/home.page';
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
                path: 'about',
                element: <AboutPage />
            }
        ]
    }
]

export default route;