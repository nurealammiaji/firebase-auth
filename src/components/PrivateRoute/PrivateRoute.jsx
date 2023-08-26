import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <><br /><br /><br /><br /><progress className="w-56 progress"></progress></>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/sign-in" replace={true}></Navigate>
};

export default PrivateRoute;