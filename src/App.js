import ReactDOM from 'react-dom/client';
import Heading from './components/Heading';
import Restaurant from './components/Restaurant';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
//import Grocery from './components/Grocery';
import { lazy, Suspense } from 'react';
import Shimmer from './components/Shimmer';

const App = () => {
  return (
    <div className='app'>
        <Heading />
        <Outlet />
    </div>
  );
}

const Grocery = lazy(() => import('./components/Grocery'));

const router = createBrowserRouter([
  { path: '/', element: <App />, 
    children: [
      { path: '/', element: <Restaurant /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/restaurant/:resId', element: <RestaurantMenu /> },
      { path: '/grocery', element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense> }
    ],
    errorElement: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);