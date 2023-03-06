import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Utilisation de la Data API pour créer un browserRouter sur base des routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import route from './routes/route';

// Utilisation du store necessite le provider de celui-ci
import { Provider } from 'react-redux';
import store from './store/store';

// ↓ Création du router
const router = createBrowserRouter(route);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Utilisation du Provider de "React-Redux" */}
    <Provider store={store} >

      {/* Utilisation du router avec le RouterProvider */}
      <RouterProvider router={router} />
      {/* NB : L'app est retiré car elle fait partie des routes */}

    </Provider>

  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
