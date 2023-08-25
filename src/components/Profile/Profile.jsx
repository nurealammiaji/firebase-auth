import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <br /><br />
            <div className="py-10 hero bg-base-200 rounded-xl">
            <h3>Email: {user.email}</h3>
            </div>
        </div>
    );
};

export default Profile;