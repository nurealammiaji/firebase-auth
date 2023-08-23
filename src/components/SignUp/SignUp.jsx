import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div>
            <br /><br />
            <div className="py-10 hero bg-base-200 rounded-xl">
                <div className="hero-content">
                    <div className="w-full max-w-sm shadow-2xl card bg-base-100">
                        <form className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/sign-in" className="label-text-alt link link-hover">Have Account?</Link>
                                </label>
                            </div>
                            <div className="mt-2 form-control">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;