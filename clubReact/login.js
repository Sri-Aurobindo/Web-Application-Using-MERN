import React from "react";
import ReactDOM from "react-dom";

const Login = () => {
    return (
       <> <header>
        <h1>Login</h1>
    </header>
    <main>
        <form>
            <label>Email :</label>
            <input type="email" id="Email" required />
            <label>Password :</label>
            <input type="password" id="Password" minLength="8" required />
            <button type="submit">Login</button>
        </form>
    </main>
    <footer>
        &copy;2021 - GothamSoccerClub
    </footer></>
    )
}

export default Login;