import ReactDOM from 'react-dom/client';
import Heading from './components/Heading';
import Restaurant from './components/Restaurant';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const App = () => {
  return (
    <div className='app'>
        <Heading />
        <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  { path: '/', element: <App />, 
    children: [
      { path: '/', element: <Restaurant /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/restaurant/:resId', element: <RestaurantMenu /> }
    ],
    errorElement: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);