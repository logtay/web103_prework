import {useRoutes} from 'react-router-dom';
import {useState} from 'react';
import AllCreators from './components/AllCreators.jsx';
import ViewCreator from './components/ViewCreator.jsx';
import EditCreator from './components/EditCreator.jsx';
import AddCreator from './components/AddCreator.jsx';

function App() {
  const routes = useRoutes([ {path: '/', element: <AllCreators />}, 

    {path: '/creator/:id', element: <ViewCreator />},
    {path: '/edit/:id', element: <EditCreator />},
    {path: '/add', element: <AddCreator />},
   ])

  return (
    <>
      <div className='App'>
       {routes}
      </div>
    </>
  )
}

export default App
