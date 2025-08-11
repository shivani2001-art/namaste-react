import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './components/Heading';
import Restaurant from './components/Restaurant';

const App = () => {
  return (
    <div className='app'>
        <Heading />
        <Restaurant />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);