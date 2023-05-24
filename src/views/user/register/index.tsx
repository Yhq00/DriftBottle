import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import styles from "./index.module.scss";
interface RegisterFormData {
  username: string;
  password: string;
  pwd: string;
  nickname: string;
}

const RegisterForm: React.FC = () => {
  const [registerData, setRegisterData] = useState<RegisterFormData>({
    username: "",
    password: "",
    pwd: "",
    nickname: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (values: any) => {
    console.log("registerData: ", values);
    // 在这里你可以将表单数据发送到服务器进行处理
  };

  return (
    <div className={styles.content}>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleSubmit}
        className={styles.form}
      >
        <Form.Item label="用户名" name="username">
          <Input name="username" onChange={handleInputChange} />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input.Password name="password" />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input.Password name="password" />
        </Form.Item>
        <Form.Item label="确认密码" name="pwd">
          <Input.Password name="pwd" onChange={handleInputChange} />
        </Form.Item>
        <Form.Item label="昵称" name="nickname">
          <Input name="nickname" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
