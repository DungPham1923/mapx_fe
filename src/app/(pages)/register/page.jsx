"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Alert, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import Head from "next/head";

export default function Register() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [form] = Form.useForm(); // Để sử dụng form instance

  useEffect(() => {
    document.title = "Đăng ký";
  }, []);

  const onFinish = async (values) => {
    try {
      const { password, rePassword, ...rest } = values;

      if (password !== rePassword) {
        setErrorMessage("Mật khẩu và xác nhận mật khẩu không khớp.");
        return;
      }
      if (!agreeTerms) {
        setErrorMessage("Bạn cần đồng ý với các điều khoản sử dụng.");
        return;
      }

      const res = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...rest, password }),
      });
      const data = await res.json();
      if (res.ok) {
        const nextUrl = searchParams.get("next");
        router.push(nextUrl ?? "home");
        router.refresh();
      } else {
        setErrorMessage(`Register failed: ${data.error}`);
      }
    } catch (error) {
      console.error("Đăng ký lỗi:", error);
      setErrorMessage("Có lỗi xảy ra khi đăng ký. Vui lòng thử lại.");
    }
  };

  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-gray-50"
      style={{
        backgroundImage: "url('/images/backgroundhome.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Head>
        <title>Đăng ký</title>
        <meta name="description" content="Trang đăng ký của Map_X Travel" />
      </Head>

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
          <h3 className="text-xl font-semibold">Đăng ký</h3>
          <p className="text-sm text-gray-500">
            Sử dụng Email và Mật khẩu để đăng ký.
          </p>
        </div>
        <Form
          form={form} // Thêm form instance
          layout="vertical"
          onFinish={onFinish}
          className="flex flex-col space-y-2 bg-gray-50 px-4 py-8 sm:px-16"
        >
          <Form.Item
            label="Địa chỉ email"
            name="email"
            style={{ marginBottom: "8px" }}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ email.",
              },
              {
                type: "email",
                message: "Địa chỉ email không hợp lệ.",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              size="large"
              placeholder="user@gmail.com"
            />
          </Form.Item>

          <Form.Item
            label="Tên tài khoản"
            name="username"
            style={{ marginBottom: "8px" }}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên tài khoản.",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              size="large"
              placeholder="Tên tài khoản"
            />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            style={{ marginBottom: "8px" }}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu.",
              },
              {
                min: 8,
                message: "Mật khẩu phải có ít nhất 8 ký tự.",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Nhập mật khẩu"
              prefix={<LockOutlined />}
              visibilityToggle={{
                visible: showPassword,
                onVisibleChange: setShowPassword,
              }}
            />
          </Form.Item>

          <Form.Item
            label="Xác nhận mật khẩu"
            name="rePassword"
            style={{ marginBottom: "8px" }}
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận mật khẩu.",
              },
              {
                validator: (_, value) => {
                  if (!value || value === form.getFieldValue("password")) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Mật khẩu không khớp.");
                },
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Nhập lại mật khẩu"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="agreeTerms" valuePropName="checked" noStyle>
              <Checkbox>Chấp thuận với các điều khoản sử dụng. </Checkbox>
            </Form.Item>
          </Form.Item>

          <Button type="primary" htmlType="submit" className="w-full">
            Đăng ký
          </Button>
          {errorMessage && (
            <Alert message={errorMessage} type="error" showIcon />
          )}
          <p className="text-center text-sm text-gray-600">
            Bạn đã có tài khoản?{" "}
            <a className="font-semibold text-gray-800" href="/login">
              Đăng nhập
            </a>{" "}
            ngay.
          </p>
        </Form>
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
  );
}
