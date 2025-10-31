"use client";
import React from "react";
import "./Header.css"; // Import file CSS để tạo kiểu
import { useRouter } from "next/navigation";

// Một component Icon đơn giản cho dễ hình dung
// Trong dự án thực tế, bạn nên dùng thư viện icon (ví dụ: react-icons)
// hoặc file SVG
const UserIcon = () => (
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
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

// Icon mũi tên dropdown
const DropdownArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

// Định nghĩa kiểu (type) cho một mục điều hướng
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

// Dữ liệu cho các mục điều hướng
const navItems: NavItem[] = [
  { label: "Best Food 2025", href: "/best-food-2025" },
  { label: "Near Me", href: "/near-me" },
  { label: "Destinations", href: "/destinations", hasDropdown: true },
  { label: "Foods", href: "/foods", hasDropdown: true },
  { label: "Recipes", href: "/recipes" },
  { label: "Map", href: "/map" },
  { label: "Quality Labels", href: "/quality-labels" },
  { label: "Quiz", href: "/quiz" },
];

// Component Header
const Header: React.FC = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/login"); // 4. Điều hướng đến trang /login
  };

  return (
    <header className="header-container">
      {/* Phần Logo (Bên trái) */}
      <div className="header-logo">
        <a href="/">
          {/* Logo trong ảnh là sự kết hợp của icon và text
              Ở đây chúng ta mô phỏng bằng text */}
          <span className="logo-icon">taste</span>
          <span className="logo-text">atlas</span>
        </a>
      </div>

      {/* Phần điều hướng (Giữa) */}
      <nav className="header-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>
                {item.label}
                {item.hasDropdown && <DropdownArrow />}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Phần Đăng nhập (Bên phải) */}
      <div className="header-login">
        <span onClick={handleLoginClick} className="login-link">
          <UserIcon />
        </span>
      </div>
    </header>
  );
};

export default Header;
