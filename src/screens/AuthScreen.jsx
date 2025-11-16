import React from "react";
import "./AuthScreen.css";
import Logo from "../assets/img/logo-snaptic.png";

export default function AuthScreen() {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <div className="auth-logo">
          <img src={Logo} alt="App logo" />
        </div>

        <div className="auth-inputs">
          <label htmlFor="auth-username" id="label-username">
            Username:
          </label>
          <input
            type="text"
            placeholder="Минимум 5 символов"
            className="auth-input"
            id="auth-username"
            name="username"
            minLength={5}
            required
          />

          <label htmlFor="auth-password" id="label-password">
            Password:
          </label>
          <input
            type="password"
            placeholder="Минимум 8 символов"
            className="auth-input"
            id="auth-password"
            name="password"
            minLength={8}
            required
          />
        </div>

        <div className="auth-button">
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
}
