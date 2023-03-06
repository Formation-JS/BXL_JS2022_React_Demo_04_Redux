import './App.css';
import Header from './containers/header/header';
import { Outlet } from 'react-router-dom';

// Layout principal => Injecté via la routing
function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
