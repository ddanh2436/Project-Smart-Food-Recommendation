"use client";

import React, { useState } from "react";
import Link from "next/link"; // Dùng Link để điều hướng trong Next.js
import "./RegisterPage.css"; // Import file CSS

// Icon Google
const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="24px"
    height="24px"
  >
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,8,3.029V10.745C36.944,12.92,41.921,17.445,43.611,20.083z"
    />
    <path
      fill="#FF3D00"
      d="M6.399,20.083c0-1.162,0.254-2.28,0.701-3.32h-6.83C0.21,16.29,0,17.659,0,19.083c0,1.423,0.21,2.793,0.67,4.043h6.83C6.653,22.363,6.399,21.245,6.399,20.083z"
    />
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,8,3.029V10.745C36.944,12.92,41.921,17.445,43.611,20.083z"
      transform="translate(0, 1)"
    />
  </svg>
);

// Icon Github
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3c0-1.22-.5-2.02-1.02-2.22C18.18.8 16.5 1.73 15 2.5A6.5 6.5 0 0 0 12 1c-1.85 0-3.63.78-4.78 2.5C4.5 5.23 4 6 4 7c0 3.36 2.8 4.62 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

// Icon Facebook
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#1877F2"
    stroke="#1877F2"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

// Icon hiển thị/ẩn mật khẩu
const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#888"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="eye-icon"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);
const EyeOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#888"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="eye-icon"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.54 18.54 0 0 1 2.58-3.06M2.37 2.37L22.63 22.63M11.29 11.29a3 3 0 0 1-3.12-3.12"></path>
  </svg>
);

const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false); // State để ẩn/hiện mật khẩu

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý logic đăng ký ở đây
    console.log("Đăng ký...");
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        {/* Your logo */}
        <div className="login-logo-placeholder">Your logo</div>

        <h1 className="login-title">Register</h1>

        <form onSubmit={handleRegisterSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="username@gmail.com"
              className="login-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="login-input"
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </span>
            </div>
          </div>

          <div className="forgot-password-link">
            <Link href="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>

        <div className="or-continue-with">
          <span>or continue with</span>
        </div>

        <div className="social-login-buttons">
          <button className="social-button google">
            <GoogleIcon />
          </button>
          <button className="social-button github">
            <GithubIcon />
          </button>
          <button className="social-button facebook">
            <FacebookIcon />
          </button>
        </div>

        <div className="register-prompt">
          Don't have an account yet?{" "}
          <Link href="/register" className="register-link">
            Register for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
