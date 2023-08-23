import { Link, NavLink } from "react-router-dom";


const Navigation = () => {
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
        </nav>
    );
};

export default Navigation;