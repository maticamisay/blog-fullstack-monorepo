import { createContext, useEffect, useState } from "react";
import {login,checkJWT} from "../services/login";
const LoginContext = createContext('');

export function LoginProvider({ defaultValue = [], children }) {
    const [username, setUsername] = useState(defaultValue);
    const [password, setPassword] = useState(defaultValue);
    const [errorMessage, setErrorMessage] = useState(defaultValue);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(false);
    const [token, setToken] = useState(null)


    const handleLogin = async (username, password) => {

        try {
            const user = await login({ username, password });
            setUser(user);
            setIsLoggedIn(true);
            console.log(isLoggedIn);
            setToken(user.token);
            window.localStorage.setItem(
                'loggedPostAppUser', JSON.stringify(user)
            )
            setUsername("");
            setPassword("");
        } catch (e) {
            console.log(e);
            setErrorMessage("Wrong credentials");
            setUsername("");
            setPassword("");
            // quitamos el error después de 5 segundos
            setTimeout(() => {
                setErrorMessage(null);
            }, 5000);
        }
    }

    const isLogged = async () => {
        try {
            const localLoggedUser = window.localStorage.getItem("loggedPostAppUser");
            const { username, token } = JSON.parse(localLoggedUser);
            const tokencito = `Bearer ${token}`
            setToken(tokencito)
            checkJWT(username, tokencito).then(e => {
                if (e.status === 200) {
                    setUser(e.data.user);
                    setIsLoggedIn(true);
                }
            })
        } catch (e) {
           console.log('Not logged');
        }
    }

    const handleLoggedOut = () => {
        setUser(false);
        setIsLoggedIn(false)
        window.localStorage.removeItem('loggedPostAppUser')
    }
    useEffect(()=>{
        isLogged()
    },[isLoggedIn])
    return (
        <LoginContext.Provider value={{ token, setToken, isLogged, isLoggedIn, handleLoggedOut, username, setUsername, password, setPassword, handleLogin, errorMessage, user }}>
            {children}
        </LoginContext.Provider>
    )
}
export default LoginContext;