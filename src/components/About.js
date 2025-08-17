import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor called");
    }

    componentDidMount() {
        console.log("Parent component mounted");
    }

    render() {
         console.log("Parent component rendered");
        return (
            <div>
                <h1>About Us</h1>
                {/* <User name="Shivani (function)" email="shivani@example.com (function)"/> */}
                <UserClass name="First (class)" email="shivani@example.com (class)"/>
                <UserClass name="Second (class)" email="shivani@example.com (class)"/>
                <p>This is a food delivery app that connects you with your favorite restaurants.</p>
                <p>We aim to provide the best food delivery experience with a wide variety of cuisines and quick service.</p>
                <p>Our team is dedicated to ensuring customer satisfaction and delivering quality food right to your doorstep.</p>
            </div>
        );
    }
}

export default About;