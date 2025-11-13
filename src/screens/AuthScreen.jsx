import React from "react";
import "./AuthScreen.css";
import Logo from "../assets/img/logo-snaptic.png";

export default function AuthScreen(){
    return(
        <div className="auth-container">
            <form className="auth-Form">
                <div className="auth-logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="auth-inputs">
                    <label htmlFor="auth-username/">UserName: </label>
                    <input
                        type="text"
                        placeholder="*****"
                        className="auth-input"
                        id="auth-username"
                    /><br/>
                    <label htmlFor="auth-password/">Password: </label>
                    <input
                        type="text"
                        placeholder="********"
                        className="auth-input"
                        id="auth-password"
                    />
                </div>
                <div className="auth-button">
                    <button type="submit">Confirm</button>
                </div>
            </form>
        </div>
    );
}
