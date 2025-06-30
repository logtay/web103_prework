import {useRoutes} from 'react-router-dom';
import {useEffect, useState} from 'react';

import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import Navbar from './components/Navbar';
import { supabase } from './client';

import '@picocss/pico/css/pico.min.css';
import './App.css'; 

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const {data} = await supabase
      .from('creators')
      .select()
      .order('created_at', { ascending: true });

setCreators(data);
    };
    fetchCreators();
  }, []);

  const routes = useRoutes([ {path: '/', element: <ShowCreators creators={creators} />}, 

    {path: '/creator/:id', element: <ViewCreator />},
    {path: '/edit/:id', element: <EditCreator />},
    {path: '/add', element: <AddCreator />},
   ])

  return (
    <>
    <Navbar />
      <div className='App'>
       {routes}
      </div>
    </>
  )
}

export default App
