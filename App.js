import React from 'react';
import ReactDOM from 'react-dom/client';

// //React.createElement => creates a object => after render converts to HTML
// const heading = React.createElement('h1', {id: 'heading'}, 'Hello, World from React!');

// console.log(heading); // This will log the React element object
// // JSX - transpiled before JS - PARCEL - BABEL (JSX to JS) - React Element

// // Babel converts it into JSX => React.createElement => React Element JS - (Object) => Renders HTML Element
// const jsxHeading = <h1 id="heading">Hello, World from React!</h1>

// React Element
const jsxHeading = (
  <h1 id="heading">Hello, World from React!</h1>
);

// React Functional Component
const Heading = () => {
    return (
        <h1 id="heading">Hello, World from functional component!</h1>
    );
}

// component composition
const SubHeading = () => {
    return (
        <div>
            {jsxHeading}
            <Heading />
            {Heading()}
            <h2 id="sub-heading">This is a subheading</h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<SubHeading />);