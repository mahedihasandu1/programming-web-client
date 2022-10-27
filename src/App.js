import { useContext } from 'react';

import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router'
import { AuthContext } from './UserContext/UserContext';



function App() {
 const theme=useContext(AuthContext)

  return (
 
      <div id={theme}>
        <RouterProvider router={router}></RouterProvider>
      </div>
  );
}
export default App;
