import React from "react";
import { Container } from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "./style.css";

const login = () => {
  return (
    <div>
      <Container>
        <div className="login-part">
          <div className="login">
            <div className="regester-icon">
              <BsLinkedin />
            </div>
            <div className="regester-header">
              <h2>Login</h2>
              <p>Free register and you can enjoy it</p>
            </div>
            <div className="login-form">
              <form>
                <label className="label">Email Address</label>
                <Input placeholder=" " type="text" size="lg" width="auto" />
                <label className="label3">Password</label>
                <Input placeholder=" " type=" number" size="lg" width="auto" />

                <div className="login-btn">
                  <Button type="submit" variant="solid">
                    Sign Up
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default login;
