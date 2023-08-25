import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const Navigation = () => {

    const { user, signOutHandler } = useContext(AuthContext);

    const signOutHandle = () => {
        signOutHandler()
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <nav className="justify-between navbar bg-primary text-primary-content rounded-2xl">
            <div>
                <Link className="text-3xl normal-case btn btn-ghost">Firebase Auth</Link>
            </div>
            <div className="[&>*]:px-4 [&>*]:py-2">
                <NavLink className="text-lg normal-case btn btn-ghost" to="/">Home</NavLink>
                <NavLink className="text-lg normal-case btn btn-ghost" to="/sign-up">Sign Up</NavLink>
                <NavLink className="text-lg normal-case btn btn-ghost" to="/sign-in">Sign In</NavLink>
            </div>
            <div>
                {user ? <><p>{user.email}</p><button className="px-4 py-3 mx-2 bg-error rounded-3xl" onClick={signOutHandle}>Sign Out</button></> : <><Link to="/sign-in"><button className="px-4 py-3 mx-2 text-white bg-success rounded-3xl">Sign In</button></Link></>}
            </div>
        </nav>
    );
};

export default Navigation;