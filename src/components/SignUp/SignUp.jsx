import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const SignUp = () => {

    const { signUpHandler, googleSignInHandler } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        signUpHandler(email, password)
        .then(result => {
            const signedUpUser = result.user;
            console.log(signedUpUser);
        })
        .catch(error => {
            console.log(error.message);
        })
        form.reset();
    }
    
    const googleSignIn = () => {
        googleSignInHandler()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <br /><br />
            <div className="py-10 hero bg-base-200 rounded-xl">
                <div className="hero-content">
                    <div className="w-full max-w-sm shadow-2xl card bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
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
                                <label className="label">
                                    <Link to="/sign-in" className="label-text-alt link link-hover">Have Account?</Link>
                                </label>
                            </div>
                            <div className="mt-2 form-control">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                                <p className="my-2 italic">or</p>
                                <button onClick={googleSignIn} type="button" className="btn btn-primary">Sign In with Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;