import React from "react";
import "./style.css";
import MenuSide from "../../Components/MenuSide";
import MainSidePrivate from "../../Components/MainSidePrivate";
import styled from "styled-components";

const PrivateHome = () => {
  // const ButtonDisplay = styled.div`
  //   button {
  //     display: none;
  //   }
  // `;
  return (
    <div className="home">
      <div className="menu_side">
        <MenuSide />
      </div>
      <div className="main_side">
        {/* <ButtonDisplay> */}
        <MainSidePrivate />
        {/* </ButtonDisplay> */}
      </div>
    </div>
  );
};
export default PrivateHome;
