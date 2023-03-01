import React from "react";
import {useState} from "react";
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';

export const SingUp = () => {
    const [emailInput, setEmailInput] = useState("");
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [rememberCheck, setRememberCheck] = useState(false);

    const submitHandler = e => {
        e.preventDefault();
        setEmailInput('');
        console.log(`You send info \nYour first name: ${firstNameInput}\nYour last name: ${lastNameInput}\nYour email: ${emailInput} \nYour password: ${passwordInput}\nYour remember set: ${rememberCheck}`)
    }

    const fistNameInputHandler = e => {
        setFirstNameInput(e.target.value);
        console.log(`Value First-name input: ${e.target.value}`);
    }

    const lastNameInputHandler = e => {
        setLastNameInput(e.target.value);
        console.log(`Value Last-name input: ${e.target.value}`);
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
            <h1>Sing up</h1>
            <form onSubmit={submitHandler}>
                <div className="form-row">
                    <div className="form-item">
                        <input type="text"
                               className="form-input"
                               placeholder="First name *"
                               value={firstNameInput}
                               onChange={fistNameInputHandler}/>
                    </div>
                    <div className="form-item">
                        <input type="text"
                               className="form-input"
                               placeholder="Last name *"
                               value={lastNameInput}
                               onChange={lastNameInputHandler}/>
                    </div>
                </div>
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
                    <label htmlFor="rememberMe">I want to receive inspiration</label>
                </div>
                <button className="form-send">Sing up</button>
            </form>
            <div className="form-nav">
                <a href="">Forgot password?</a>
                <NavLink to='/'>SignIn</NavLink>
            </div>
            <Footer/>
        </div>
    );
};
