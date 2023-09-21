import React from "react";
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <div className="container">
        <div className="wrap">
          <Row>
            <Col xl={12} md={24} sm={24} className="hideonsm">
              <img
                src="./assets/AI/loginleftAI.png"
                alt="one"
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col xl={12} md={24} sm={24}>
              <Outlet />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
