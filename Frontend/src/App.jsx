import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Signup from './components/Signup';
import Login from './components/Login';
import Owner from './components/Owner';
import Ownerview from './components/Ownerview';

import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser] = useAuth();  // Assume useAuth returns the authenticated user object
  const ownerId = authUser ? authUser.id : null;  // Replace with actual logic to get ownerId from authUser

  // Create routes using the newer RouterProvider pattern
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'signup',
          element: <Signup />,
        },
        {
          path: 'owner',
          element: authUser ? <Owner /> : <Navigate to="/signup" />,
        },
        {
          path: 'ownerview',
          element: <Ownerview/>,
        },
      ],
    },
  ]);

  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      <Toaster />
    </>
  );
}

export default App;





// import React from 'react';
// // import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Layout from './components/Layout';
// import Signup from './components/Signup'
// import Login from './components/Login'
// import { Toaster } from 'react-hot-toast';
// import { useAuth } from './context/AuthProvider';



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '/',
//         element: <Home/>,
//       },
//       {
//         path: 'about',
//         element= {authUser ? <About /> : <Navigate to = '/signup'/>},
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//       {
//         path: 'login',
//         element: <Login />,
//       },
//       {
//         path: 'signup',
//         element: <Signup />,
//       },
//     ],
//   },
// ]);

//  function App(){

//     const [authUser,setAuthUser] = useAuth();

// return(
//   <>
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
//   <Toaster/>
//   </>
// )
//  }
// export  default App;
