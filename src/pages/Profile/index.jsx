import React from "react";
import "./style.css";
import { Container } from "@chakra-ui/react";
import img3 from "../../../public/images/logo.png";
import Banner from "./Banner";

const Profile = () => {
  return (
    <div>
      <div className="logo">
        <img src={img3} />
      </div>
      <div className="profile-page mx-0">
        <Container>
          <div className="profile">
            <Banner />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Profile;
