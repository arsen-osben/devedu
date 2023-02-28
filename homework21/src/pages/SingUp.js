import React from "react";
import {useState} from "react";
import Footer from "../components/Footer";

export const SingIn = () => {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [rememberCheck, setRememberCheck] = useState(false);

    const submitHandler = e => {
        e.preventDefault();
        setEmailInput('');
        console.log(`You send info \nYour email: ${emailInput} \nYour password: ${passwordInput}\nYour remember set: ${rememberCheck}`)
    }

    const emailInputHandler = e => {
        setEmailInput(e.target.value);
        console.log(`Value E-mail input: ${e.target.value}`);
    }

    const passwordInputHandler = e => {
        setPasswordInput(e.target.value);
        console.log(`Value Password input: ${e.target.value}`);
    }

    const rememberCheckHandler = e => {
        setRememberCheck(e.target.checked);
        console.log(`Value Remember check: ${e.target.checked}`);
    }

    return (
        <div className="form-container">
            <h1>Sing in</h1>
            <form onSubmit={submitHandler}>
                <div className="form-item">
                    <input type="text"
                           className="form-input"
                           placeholder="Email Address *"
                           value={emailInput}
                           onChange={emailInputHandler}/>
                </div>
                <div className="form-item">
                    <input type="password"
                           className="form-input"
                           placeholder="Password *"
                           value={passwordInput}
                           onChange={passwordInputHandler}/>
                </div>
                <div className="form-item">
                    <input type="checkbox"
                           className="form-checkbox"
                           id="rememberMe"
                            onChange={rememberCheckHandler}/>
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                <button className="form-send">Sing in</button>
            </form>
            <div className="form-nav">
                <a href="">Forgot password?</a>
                <a href="">Don't have an account? Sign UP</a>
            </div>
            <Footer/>
        </div>
    );
};
