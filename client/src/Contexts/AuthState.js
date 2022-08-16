import Authcontext from "./AuthContext";

const AuthState= (props) =>{
    const AuthenticationState= {
        "token":"",
        "authorised":false
    }

    return (
        <Authcontext.Provider value={AuthenticationState}>
            {props.children}
        </Authcontext.Provider>

    )
}

export default AuthState