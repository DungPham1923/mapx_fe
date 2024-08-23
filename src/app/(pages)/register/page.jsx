"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";

export default function Register() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [successEmail, setSuccessEmail] = useState("");

  const [errorPassword, setErrorPassword] = useState("");
  const [successPassword, setSuccessPassword] = useState("");

  const [errorRePassword, setErrorRePassword] = useState("");
  const [successRePassword, setSuccessRePassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const [valid, setValid] = useState(true);

  useEffect(() => {
    document.title = "Đăng ký";
    let emailError = "";
    let emailSuccess = "";

    let passwordError = "";
    let passwordSuccess = "";

    let rePasswordError = "";
    let rePasswordSuccess = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (username && !emailRegex.test(username)) {
      emailError = "Địa chỉ email không hợp lệ ❌.";
      setValid(false);
    } else if (username) {
      emailSuccess = "Địa chỉ email hợp lệ ✅.";
      setValid(true);
    }
    console.log(rePassword);
    if (password && password.length < 8) {
      passwordError = "Mật khẩu phải có ít nhất 8 ký tự ❌.";
      setValid(false);
    } else if (password && !passwordRegex.test(password)) {
      passwordError = "Mật khẩu phải có ít nhất 1 ký tự hoa, thường, 1 số. ❌.";
      setValid(false);
    } else if (password) {
      passwordSuccess = "Mật khẩu hợp lệ ✅.";
      setValid(true);
    }

    // if (rePassword !== password) {
    //   rePasswordError = "Mật khẩu nhập lại không trùng khớp ❌.";
    //   setValid(false);
    // } else if (rePassword && password.length !== 0) {
    //   rePasswordSuccess = "Xác nhận mật khẩu thành công ✅.";
    //   setValid(true);
    // }
    setErrorEmail(emailError);
    setSuccessEmail(emailSuccess);

    setErrorPassword(passwordError);
    setSuccessPassword(passwordSuccess);

    // setErrorRePassword(rePasswordError);
    // setSuccessRePassword(rePasswordSuccess);
  }, [username, password, rePassword]);

  useEffect( () => {
    let rePasswordError = "";
    let rePasswordSuccess = "";
    if (rePassword !== password) {
      rePasswordError = "Mật khẩu nhập lại không trùng khớp ❌.";
      setValid(false);
    } else if (rePassword && password.length !== 0) {
      rePasswordSuccess = "Xác nhận mật khẩu thành công ✅.";
      setValid(true);
    }
    setErrorRePassword(rePasswordError);
    setSuccessRePassword(rePasswordSuccess);
  }, [rePassword])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!valid) {
      return;
    }

    try {
      const res = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, rePassword }),
      });
      const data = await res.json();
      if (res.ok) {
        const nextUrl = searchParams.get("next");
        router.push(nextUrl ?? "");
        router.refresh();
      } else {
        alert(`Register failed: ${data.error}`);
      }
    } catch (error) {
      console.error("Register error:", error);
      alert("Có lỗi xảy ra khi đăng ký. Vui lòng thử lại.");
    }
  };
  return (
    <Fragment>
      {/* bg-[url('/images/logo.png')] */}
      <div
        className="flex h-screen w-screen items-center justify-center bg-gray-50 "
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
              className="h-12 w-auto bg-transparent"
              style={{ background: "transparent" }}
            />
          </a>
          <h5 className="text-xl font-bold">Map_X Travel</h5>
        </div>

        <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
            <h3 className="text-xl font-semibold">Đăng ký</h3>
            <p className="text-sm text-gray-500">
              Sử dụng Email để đăng ký tài khoản
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold  text-gray-600 uppercase"
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              <h6 className="text-red-500 text-xs">{errorPassword}</h6>
              <h6 className="text-green-500 text-xs">{successPassword}</h6>
            </div>

            <div>
              <label
                htmlFor="repassword"
                className="block text-xs font-bold text-gray-600 uppercase"
              >
                Xác nhận mật khẩu
              </label>
              <div className="relative">
                <input
                  id="rePassword"
                  placeholder="Nhập mật khẩu"
                  required
                  className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  type={showRePassword ? "text" : "password"}
                  name="rePassword"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowRePassword(!showRePassword)}
                >
                  {showRePassword ? "🙈" : "👁️"}
                </button>
              </div>
              <h6 className="text-red-500 text-xs">{errorRePassword}</h6>
              <h6 className="text-green-500 text-xs">{successRePassword}</h6>
            </div>

            <button
              type="submit"
              className="flex h-10 w-full items-center justify-center rounded-md border text-sm font-bold transition-all focus:outline-none bg-blue-500 text-white"
            >
              Đăng ký
              <span aria-live="polite" className="sr-only" role="status">
                Submit form
              </span>
            </button>
            <h6 className="text-red-500 text-xs">{errorMessage}</h6>
            <p className="text-center text-sm text-gray-600">
              Bạn đã có tài khoản?{" "}
              <a className="font-semibold text-gray-800" href="/login">
                Đăng nhập
              </a>{" "}
              ngay.
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
