"use client";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, theme } from "antd";
import { useLogin } from "@/hooks/auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const {
    token: { colorPrimary, colorTextBase, borderRadiusLG },
  } = theme.useToken();

  const { loading, getLogin } = useLogin();
  const router = useRouter();

  const onFinish = (values) => {
    getLogin(values);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: borderRadiusLG,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          width: "400px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "16px",
            color: colorPrimary,
          }}
        >
          Audit Note
        </h1>
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter your email"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Button
                type="link"
                // onClick={() => router.push("/forgot-password")}
                style={{ padding: 0, fontSize: "14px" }}
              >
                Forgot Password?
              </Button>
            </div>
          </Form.Item>
          <Form.Item>
            <Button
              loading={loading}
              block
              type="primary"
              htmlType="submit"
              size="large"
              style={{
                backgroundColor: colorPrimary,
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
