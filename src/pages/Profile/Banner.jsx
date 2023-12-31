import React from "react";
import banner from "../../../public/images/ban.png";
import { Button } from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <img src={banner} />
        <div className="banner-btn">
          <Button type="button">
            <FaRegEdit />
            Edit profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
