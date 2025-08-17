import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {
                name: "Dummy (name)",
                email: "Dummy (email)"
            },
        };
    }

    async componentDidMount() {
        const users_data = await fetch("https://api.github.com/users/shivani2001-art");
        const json = await users_data.json();
        //console.log(json);
        this.setState({
            users: json
        });
    }

    render() {
        return (
            <div>
                <h1>About Us</h1>
                {/* <User name="Shivani (function)" email="shivani@example.com (function)"/> */}
                <UserClass name={this.state.users.login} email={this.state.users.html_url}/>
                <p>This is a food delivery app that connects you with your favorite restaurants.</p>
                <p>We aim to provide the best food delivery experience with a wide variety of cuisines and quick service.</p>
                <p>Our team is dedicated to ensuring customer satisfaction and delivering quality food right to your doorstep.</p>
            </div>
        );
    }
}

export default About;