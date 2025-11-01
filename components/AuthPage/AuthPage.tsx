"use client";

import React, { useState } from "react";
import "./AuthPage.css";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";

const AuthForm: React.FC = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const handleSocialLogin = (provider: string) => {
    console.log(`Đăng nhập với ${provider}`);
  };

  return (
    <div className="auth-page-container">
      <div
        className={`auth-container ${
          isRegisterActive ? "register-active" : ""
        }`}
      >
        {/* FORM ĐĂNG KÝ (REGISTER) */}
        <div className="form-container sign-up-container">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* 1. Tiêu đề */}
            <h1>Create Account</h1>

            {/* 2. Các form điền */}
            <div className="input-group">
              <FaUser />
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-group">
              <FaEnvelope />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <FaLock />
              <input type="password" placeholder="Password" />
            </div>

            {/* 3. Đăng nhập với nền tảng khác */}
            <div className="social-container">
              <a
                href="#"
                className="social-icon"
                onClick={() => handleSocialLogin("Facebook")}
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="social-icon"
                onClick={() => handleSocialLogin("Google")}
              >
                <FaGoogle />
              </a>
            </div>
            <span>or use your email for registration</span>

            {/* 4. Button (Form này không có 'forgot password') */}
            <button type="submit" className="auth-button">
              Sign Up
            </button>
          </form>
        </div>

        {/* FORM ĐĂNG NHẬP (LOGIN) */}
        <div className="form-container sign-in-container">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* 1. Tiêu đề */}
            <h1>Sign in</h1>

            {/* 2. Các form điền */}
            <div className="input-group">
              <FaEnvelope />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <FaLock />
              <input type="password" placeholder="Password" />
            </div>
            <div className="use-account">
              <span>Or use your account</span>
            </div>
            {/* 3. Đăng nhập với nền tảng khác */}
            <div className="social-container">
              <a
                href="#"
                className="social-icon"
                onClick={() => handleSocialLogin("Facebook")}
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="social-icon"
                onClick={() => handleSocialLogin("Google")}
              >
                <FaGoogle />
              </a>
            </div>

            {/* 4. Forgot Password */}
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>

            {/* 5. Button */}
            <button type="submit" className="auth-button">
              Sign In
            </button>
          </form>
        </div>

        {/* PHẦN OVERLAY (Giữ nguyên) */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost-button"
                onClick={() => setIsRegisterActive(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost-button"
                onClick={() => setIsRegisterActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
