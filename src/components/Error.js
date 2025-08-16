import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1> Ooops!!!</h1>
            <h2> Something went wrongggg</h2>
            <h2> {error.status}: {error.statusText} </h2>
        </div>
    )
}

export default Error