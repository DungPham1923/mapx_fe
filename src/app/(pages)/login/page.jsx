"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [successEmail, setSuccessEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [successPassword, setSuccessPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [valid, setValid] = useState(true);
  useEffect(() => {

    document.title = "Đăng nhập";
    let emailError = "";
    let passwordError = "";
    let emailSuccess = "";
    let passwordSuccess = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (username && !emailRegex.test(username)) {
      emailError = "Địa chỉ email không hợp lệ ❌.";
      setValid(false);
    } else if (username) {
      emailSuccess = "Địa chỉ email hợp lệ ✅.";
      setValid(true);
    }

    if (password && password.length < 8) {
      passwordError = "Mật khẩu phải có ít nhất 8 ký tự ❌.";
      setValid(false);
    } else if (password) {
      passwordSuccess = "Mật khẩu hợp lệ ✅.";
      setValid(true);
    }
    setErrorEmail(emailError);
    setSuccessEmail(emailSuccess);
    setErrorPassword(passwordError);
    setSuccessPassword(passwordSuccess);
  }, [username, password]);
  // useEffect(() => {
  //   document.title = "Đăng nhập"; // Chỉ đặt title sau khi component đã mount
  // }, []);
  const validate = (event) => {
    if (!username || !password) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin đăng nhập!");
      event.preventDefault(); // Ngăn chặn submit nếu thông tin không đầy đủ
    } else if (!valid) {
      setErrorMessage("Vui lòng điền chính xác thông tin đăng nhập!");
      event.preventDefault(); // Ngăn chặn submit nếu thông tin không hợp lệ
    } else {
      setErrorMessage(""); // Xóa thông báo lỗi nếu thông tin hợp lệ
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!valid) {
      return;
    }
    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        const nextUrl = searchParams.get("next");
        router.push(nextUrl ?? "");
        router.refresh();
      } else {
        alert(`Login failed: ${data.error}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại.");
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Đăng nhập</title>
        <meta name="description" content="Trang đăng nhập của Map_X Travel" />
      </Head>
      <div
        className="flex h-screen w-screen items-center justify-center bg-gray-50"
        style={{
          backgroundImage: "url('/images/backgroundhome.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-8 left-8 flex items-center space-x-4">
          <a href="http://localhost:3000/home">
            <img
              src="/images/logo.png"
              alt="Map_X Logo"
              className="h-12 w-auto"
            />
          </a>
          <h5 className="text-xl font-bold">Map_X Travel</h5>
        </div>
        <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
            <h3 className="text-xl font-semibold">Đăng nhập</h3>
            <p className="text-sm text-gray-500">
              Sử dụng Email và Mật khẩu để đăng nhập
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-gray-600 uppercase"
              >
                Địa chỉ email
              </label>
              <input
                id="email"
                placeholder="user@gmail.com"
                autoComplete="email"
                required
                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                type="email"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <h6 className="text-red-500 text-xs">{errorEmail}</h6>
              <h6 className="text-green-500 text-xs">{successEmail}</h6>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-bold text-gray-600 uppercase"
              >
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  id="password"
                  placeholder="Nhập mật khẩu"
                  required
                  className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  type={showPassword ? "text" : "password"} // Thay đổi type dựa trên state showPassword
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)} // Thay đổi trạng thái showPassword khi nhấn nút
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              <h6 className="text-red-500 text-xs">{errorPassword}</h6>
              <h6 className="text-green-500 text-xs">{successPassword}</h6>
            </div>

            <button
              type="submit"
              className="flex h-10 w-full items-center justify-center rounded-md border text-sm font-bold transition-all focus:outline-none bg-blue-500 text-white"
              onClick={validate}
            >
              Đăng nhập
              <span aria-live="polite" className="sr-only" role="status">
                Submit form
              </span>
            </button>
            <h6 className="text-red-500 text-xs">{errorMessage}</h6>
            <p className="text-center text-sm text-gray-600">
              Bạn chưa có tài khoản?{" "}
              <a className="font-semibold text-gray-800" href="/register">
                Đăng ký
              </a>{" "}
              miễn phí.
            </p>
          </form>
        </div>
        <div className="absolute bottom-8 left-16 flex space-x-4 text-xs text-black-500 text-white">
          <a href="http://localhost:3000/home" className="hover:underline">
            © Map_X
          </a>
          <a href="#link2" className="hover:underline">
            Hướng dẫn
          </a>
          <a href="#link3" className="hover:underline">
            Quyền riêng tư
          </a>
          <a href="#link4" className="hover:underline">
            Bảo mật
          </a>
        </div>
      </div>
    </Fragment>
  );
}
