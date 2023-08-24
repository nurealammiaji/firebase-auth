import { createContext } from "react";


export const authContext = createContext(null);

const AuthProviders = () => {
    return (
        <authContext.Provider>

        </authContext.Provider>
    );
};

export default AuthProviders;