import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <br /><br />
            <div className="py-10 hero-overlay bg-base-200 rounded-xl">
                <div className="text-center hero-content">
                    <div className="max-w-md">
                        <h1 className="mb-8 text-5xl font-bold">Hello there !</h1>
                        <p className="mb-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="sign-up"><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;