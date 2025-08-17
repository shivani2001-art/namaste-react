import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log("Child constructor called");
    }

    componentDidMount() {
        console.log("Child component mounted");
    }

    render() {
        console.log("Child component rendered");
        
        const {name, email} = this.props;
        const {count, count2} = this.state;
        return (
            <div className="user">
                <h1>Name: {name}</h1>
                <p>Email: {email}</p>
                <h2>Count: {count}</h2>
                <button onClick={( () => {
                    // never update state directly
                    // this.state.count = 1; --- IGNORE ---
                    this.setState(
                        {
                            count: count + 1
                        }
                    )
                }
                )}>Increment Count</button>
            </div>
        );
    }
}

export default UserClass;
