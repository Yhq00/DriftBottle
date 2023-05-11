import React from "react";
import styles from "./index.module.scss";
import { Button, Form, Input } from "antd";

const Login = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className={styles.body}>
        <div className={styles.content}>
          <Form
            className={styles.form}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={initialValues}
            onFinish={onFinish}
          >
            <Form.Item wrapperCol={{ offset: 9, span: 5 }}>
              <span className={styles.titleSpan}>漂流瓶</span>
            </Form.Item>
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: "请输入用户名！" }]}
            >
              <Input placeholder="请输入用户名！" className={styles.input} />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入密码！" }]}
            >
              <Input.Password
                placeholder="请输入密码！"
                className={styles.input}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <div className={styles.buttonWrapper}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.button}
                >
                  登录
                </Button>

                <Button
                  htmlType="button"
                  className={styles.button + " " + styles.registerButton}
                >
                  注册
                </Button>
              </div>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 10 }}>
              <Button
                style={{
                  borderRadius: "20px",
                  height: "40px",
                  marginLeft: "10px",
                }}
              >
                <span>忘记密码了吗？请联系管理员！</span>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
