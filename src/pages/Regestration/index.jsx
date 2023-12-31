import React from "react";
import { Container } from "@chakra-ui/react";
import Lottie from "lottie-react";
import { BsLinkedin } from "react-icons/bs";
import { Input } from "@chakra-ui/react";
import regeter from "../../svg/regeter.json";

import { Button } from "@chakra-ui/react";
import "./style.css";

const Regestration = () => {
  return (
    <div>
      <Container>
        <div className="regestration-part">
          <div className="regester-lottie">
            <Lottie animationData={regeter} loop={true} />;
          </div>
          <div className="regestration">
            <div className="regester-icon">
              <BsLinkedin />
            </div>
            <div className="regester-header">
              <h2>Get started with easily register</h2>
              <p>Free register and you can enjoy it</p>
            </div>
            <div className="regester-form">
              <form>
                <label className="label">Email Address</label>
                <Input placeholder=" " type="text" size="lg" width="auto" />
                <label className="label2">Full name</label>
                <Input placeholder=" " type="text" size="lg" width="auto" />
                <label className="label3">Password</label>
                <Input placeholder=" " type=" number" size="lg" width="auto" />
                <label className="label4">Confirm Password</label>
                <Input placeholder=" " type=" number" size="lg" width="auto" />
                <div className="regeter-btn">
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

export default Regestration;
