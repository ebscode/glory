import { useRouteError } from "react-router-dom";


const Errorpage = () => {
    const error=useRouteError()
    return (
        <div>
            <h1>ra vai koi ailen</h1>
            <p className="font-bold text-5xl">{error.statusText || error.message}</p>
        </div>
    );
};

export default Errorpage;