// conditional rendering

import React, {useState} from "react";
import LogInButton from "./loginControlComponents/LoginButton";
import LogoutButton from "./loginControlComponents/LogoutButton";

function LoginControl() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginButtonOnClickHandler = () => {
        console.log("Login Button Clicked");
        setIsLoggedIn(true);
    }

    const logoutButtonOnClickHandler = () => {
        console.log("Logout Button Clicked");
        setIsLoggedIn(false);
    }
    let button 
    console.log("isLoggedIn",isLoggedIn)
    if (isLoggedIn) {
        console.log("true isLoggedIn")
        button = <LogoutButton onClick={logoutButtonOnClickHandler} />
    } else {
        console.log("false isLoggedIn")
        button = <LogInButton onClick={loginButtonOnClickHandler} />
    }
    return <div>{button}</div>

}

export default LoginControl