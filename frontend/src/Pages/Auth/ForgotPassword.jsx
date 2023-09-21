import React from "react";
import { Row, Col } from "antd";

const ForgotPassword = () => {
  return (
    <Row className="formContainer">
      <Col span={24}>
        <div>
          <span className="loginPageTitle">Forgot Password</span>
        </div>
        <div>
          <span className="loginPageSubTitle">
            See what is going on with your business
          </span>
        </div>
      </Col>

      <Col span={24} className="mt35"></Col>
    </Row>
  );
};

export default ForgotPassword;
