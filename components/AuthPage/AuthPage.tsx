"use client";

import React, { useState } from "react";
import "./AuthPage.css";
import Image from "next/image"; // 1. Import Image từ Next.js

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaFacebookF,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthForm: React.FC = () => {
  // --- State cho Form ---
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // State cho dữ liệu input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State cho lỗi validation
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // State cho hiện/ẩn mật khẩu
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // --- Hàm xử lý ---

  // Hàm chuyển đổi form (Login/Register)
  const toggleForm = (isRegister: boolean) => {
    setIsRegisterActive(isRegister);
    setErrors({});
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsLoading(false);
  };

  // Hàm kiểm tra lỗi (Validation)
  const validate = (isRegisterForm: boolean) => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Bỏ qua validate 'name'
    if (!email) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }
    if (isRegisterForm) {
      if (!confirmPassword) {
        newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu";
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = "Mật khẩu không khớp";
      }
    }
    return newErrors;
  };

  // Hàm Submit (Chung)
  const handleSubmit = (e: React.FormEvent, isRegisterForm: boolean) => {
    e.preventDefault();
    const validationErrors = validate(isRegisterForm);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    // --- Giả lập gọi API ---
    console.log("Đang gửi dữ liệu:", { name, email, password });
    setTimeout(() => {
      setIsLoading(false);
      if (isRegisterForm) {
        console.log("Đăng ký thành công!");
      } else {
        console.log("Đăng nhập thành công!");
      }
      toggleForm(isRegisterForm);
    }, 2000);
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
          <form onSubmit={(e) => handleSubmit(e, true)}>
            <h1>Create Account</h1>

            {/* Input Email */}
            <div className="input-group">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}

            {/* Input Mật khẩu */}
            <div className="input-group">
              <FaLock />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}

            {/* Ô CONFIRM PASSWORD */}
            <div className="input-group">
              <FaLock />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
              />
              <span
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}

            {/* Social (để sau input cho hợp lý) */}
            <div className="social-container">
              <a href="#" className="social-icon facebook-hover">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon google-hover">
                <FcGoogle />
              </a>
            </div>
            <span>or use your account for registration</span>

            {/* Nút Submit */}
            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>

        {/* FORM ĐĂNG NHẬP (LOGIN) */}
        <div className="form-container sign-in-container">
          <form onSubmit={(e) => handleSubmit(e, false)}>
            <h1>Sign in</h1>

            {/* Input Email */}
            <div className="input-group">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}

            {/* Input Mật khẩu */}
            <div className="input-group">
              <FaLock />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                /* --- SỬA LỖI Ở ĐÂY --- */
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}

            {/* Social */}
            <div className="social-container">
              <a href="#" className="social-icon facebook-hover">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon google-hover">
                <FcGoogle />
              </a>
            </div>

            <a href="#" className="forgot-password">
              Forgot your password?
            </a>

            {/* Nút Submit */}
            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* PHẦN OVERLAY (đã cập nhật onClick) */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost-button"
                onClick={() => toggleForm(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost-button" onClick={() => toggleForm(true)}>
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
