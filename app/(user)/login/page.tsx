"use client";
import { useRouter } from "next/navigation";
const LoginPage: React.FC = () => {
  const router = useRouter();
  const handleRegisterClick = () => {
    router.push("/register");
  };
  return (
    <div>
      <h1>Login</h1>
      {/* Form đăng nhập sẽ được thêm vào đây */}
      <div>
        <span onClick={handleRegisterClick}>Register</span>
      </div>
    </div>
  );
};

export default LoginPage;
