import React from "react";
import { Row, Col, Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";

const SignUp = () => {
  let [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    values.password = bcrypt.hashSync(
      values.password,
      "$2a$10$CwTycUXWue0Thq9StjUM0u"
    );

    axios
      .post(`${process.env.REACT_APP_API_URL}/create-user`, values)
      .then((result) => {
        messageApi.open({
          type: "success",
          content: "Signup Success",
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (err) => {
    console.log(err);
  };

  return (
    <Row className="formContainer">
      {contextHolder}
      <Col span={24}>
        <div>
          <span className="loginPageTitle">Sign Up your Account</span>
        </div>
        <div>
          <span className="loginPageSubTitle">
            See what is going on with your business
          </span>
        </div>
      </Col>

      <Col span={24} className="mt35">
        <div>
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="con_password"
              label="Confirm Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button
                style={{ height: "50px", background: "#615ef0" }}
                type="primary"
                htmlType="submit"
                block
              >
                Sign Up
              </Button>
            </Form.Item>
            <Form.Item>
              <Row style={{ justifyContent: "center" }}>
                <Col>
                  <div style={{ margin: "0 10px" }}>
                    Already have a Account?
                  </div>
                </Col>
                <Col>
                  <div>
                    <span className="loginPageForgotTitle">
                      <Link to="/login">Login</Link>
                    </span>
                  </div>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default SignUp;
