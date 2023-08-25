import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const SignIn = () => {

    const { signInHandler } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInHandler(email, password)
        .then(result => {
            const signedInUser = result.user;
            console.log(signedInUser);
        })
        .catch(error => {
            console.log(error.message);
        })
        form.reset();
    }

    return (
        <div>
            <br /><br />
            <div className="py-10 hero bg-base-200 rounded-xl">
                <div className="hero-content">
                    <div className="w-full max-w-sm shadow-2xl card bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <div className="flex justify-between">
                                    <label className="label">
                                        <Link to="/forgot" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                    <label className="label">
                                        <Link to="/sign-up" className="label-text-alt link link-hover">Need Account?</Link>
                                    </label>
                                </div>
                            </div>
                            <div className="mt-2 form-control">
                                <button type="submit" className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;