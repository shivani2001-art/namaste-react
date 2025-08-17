import { useState } from "react";

const User = (props) => {

    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h1>Name: {props.name}</h1>
            <p>Email: {props.email}</p>
        </div>
    );
}

export default User;