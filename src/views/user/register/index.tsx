import React from "react";
import { Form, Input, Button, message } from "antd";
import styles from "./index.module.scss";
import { register } from "../../../service/user";
import { useNavigate } from "react-router-dom";
interface RegisterFormData {
  userName: string;
  passWord: string;
  nickName: string;
}
const RegisterForm: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const registerData: RegisterFormData = {
    userName: "",
    passWord: "",
    nickName: "",
  };
  const navigate = useNavigate();
  const handleSubmit = (values: any) => {
    if (values.passWord !== values.pwd) {
      message.info("两次输入密码不一致！");
    } else {
      const registered: RegisterFormData = {
        userName: values.userName,
        passWord: values.passWord,
        nickName: values.nickName,
      };
      register(registered).then((res: any) => {
        if (res.status === 200) {
          if (res.data.code === 200) {
            message.success("注册成功！");
            navigate("/");
          }
        }
      });
    }
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
        <Form.Item wrapperCol={{ offset: 9, span: 7 }}>
          <span className={styles.titleSpan}>用户注册</span>
        </Form.Item>
        <Form.Item
          label="用户名"
          name="userName"
          rules={[{ required: true, message: "请输入用户名！" }]}
        >
          <Input name="userName" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="passWord"
          rules={[{ required: true, message: "请输入密码！" }]}
        >
          <Input.Password name="passWord" />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="pwd"
          rules={[{ required: true, message: "请再次输入密码！" }]}
        >
          <Input.Password name="pwd" />
        </Form.Item>
        <Form.Item
          label="昵称"
          name="nickName"
          rules={[{ required: true, message: "请输入你的昵称！" }]}
        >
          <Input name="nickName" />
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
