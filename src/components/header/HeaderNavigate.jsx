import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiInformation2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openCart } from "../../store/slices/trelloSlice";

export const HeaderNavigate = () => {
  const dispatch = useDispatch();

  const handleOpenCart = () => {
    dispatch(openCart());
  };
  return (
    <StyledContainer>
      <textarea
        placeholder="ПОИСК"
        style={{ maxWidth: "350px", maxHeight: "150px" }}
      />
      <article>
        <MdOutlineNotificationsActive fontSize={25} color="white" />
        <RiInformation2Line fontSize={25} color="white" />
        <CgProfile fontSize={25} color="white" />
        <IoExitOutline
          //   onClick={handleSubmit}
          fontSize={27}
          color="white"
          cursor={"pointer"}
          onClick={handleOpenCart}
        />
      </article>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  & > article {
    display: flex;
    font-size: xx-small;
    gap: 10px;
  }
`;
