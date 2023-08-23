

const Forgot = () => {
    return (
        <div>
            <br /><br />
            <div className="py-10 hero bg-base-200 rounded-xl">
                <div className="hero-content">
                    <div className="w-full max-w-sm shadow-2xl card bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="mt-2 form-control">
                                <button type="submit" className="btn btn-primary">Send Reset Link</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgot;