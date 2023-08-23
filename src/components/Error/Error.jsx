import { useRouteError } from "react-router-dom";


const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <br /><br />
            <div>
                <h3 className="text-2xl">{error.status}</h3>
                <br />
                <h3 className="text-2xl">{error.statusText} </h3>
                <br />
                <h4 className="text-xl">{error.data}</h4>
            </div>
        </div>
    );
};

export default Error;