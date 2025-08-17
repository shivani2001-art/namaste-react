import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    
    }

    render() {

        const {name, email} = this.props;
        return (
            <div className="user">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        );
    }
}

export default UserClass;
