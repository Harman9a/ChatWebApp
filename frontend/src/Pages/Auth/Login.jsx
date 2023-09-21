import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Divider,
  Checkbox,
  message,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";

const Login = () => {
  let [form] = Form.useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = (values) => {
    values.password = bcrypt.hashSync(
      values.password,
      "$2a$10$CwTycUXWue0Thq9StjUM0u"
    );

    axios
      .post(`${process.env.REACT_APP_API_URL}/post-login`, values)
      .then((result) => {
        if (result.length !== 0) {
          messageApi.open({
            type: "success",
            content: "Login Success",
          });
          navigate("/");
        }
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
          <span className="loginPageTitle">Login to your Account</span>
        </div>
        <div>
          <span className="loginPageSubTitle">
            See what is going on with your business
          </span>
        </div>
      </Col>
      <Col span={24} className="mt35">
        <Button
          block
          style={{
            height: "45px",
            borderRadius: "5px",
            border: "1px solid #E8E8E8",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="./assets/AI/google.png"
              alt="two"
              style={{ marginRight: "10px" }}
            />
            <span className="hideonsm">Login With Google</span>
          </div>
        </Button>
      </Col>
      <Col span={24} className="mt35">
        <Divider>
          <span className="diviedTxt">or LOgin with Email</span>
        </Divider>
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
            <Form.Item name="remember" valuePropName="checked">
              <Row style={{ justifyContent: "space-between" }}>
                <Col>
                  <div>
                    <Checkbox>Remember me</Checkbox>
                  </div>
                </Col>
                <Col>
                  <div>
                    <span className="loginPageForgotTitle">
                      <Link to="/forgot-password">Forgot Password?</Link>
                    </span>
                  </div>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Button
                style={{ height: "50px", background: "#615ef0" }}
                type="primary"
                htmlType="submit"
                block
              >
                Login
              </Button>
            </Form.Item>
            <Form.Item>
              <Row style={{ justifyContent: "center" }}>
                <Col>
                  <div style={{ margin: "0 10px" }}>Not Registered Yet?</div>
                </Col>
                <Col>
                  <div>
                    <span className="loginPageForgotTitle">
                      <Link to="/sign-up">Create an account</Link>
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

export default Login;
