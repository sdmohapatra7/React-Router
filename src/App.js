// import {useState} from 'react';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Items from './pages/Items';
import ItemDetails from './pages/ItemDetails';
import ErroePage from './pages/ErroePage';

function App() {
  // const[page,setPage]=useState('home');
  //in this way first we define the routes and then create 
  // 1 . The createRoutesFromElements uses JSX code with the Route component to define routes for an app, which can then be used in createBrowserRouter.  The path key specifies the URL route, and the element key specifies the component to render at that specific route.

  // const routes = createRoutesFromElements(
  //   <>
  //   <Route path='/' element={<Home />}/>
  //   <Route path='/about' element={<About />}/>
  //   <Route path='/items' element={<Items />}/>
  //   </>
  // );
  //if i want to write the nested route then...
  // const routes = createRoutesFromElements(
  //   <>
  //     <Route path='/' element={<Navbar />}>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/about' element={<About />} />
  //       <Route path='/items' element={<Items />} />
  //     </Route>
  //   </>
  // );

  // const router = createBrowserRouter(routes);

  // 2 . another way to create routes..
  //The createBrowserRouter takes an array of objects with path and element keys. The path key specifies the URL route, and the element key specifies the component to render at that specific route.

  // const router = createBrowserRouter([
  //   {path:'/', element: <Home />},
  //   {path:'/about' , element: <About />},
  //   {path:'/items', element: <Items />}
  // ])

  //using nested Routes navbar is the parent component and all of its child hence navbar show all the components
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      errorElement : <ErroePage />,
      children: [
        // either we write the path empty or we can write index as true to show the Component because of using same path
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'items',
        children:[
          {index: true, element: <Items />},
          {path:':id' , element:<ItemDetails />}
        ]},
        
      ]
    }
  ])

  return (
    <>
      {/* <Navbar setPage={setPage}/>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
      {page === 'items' && <Items />} */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
