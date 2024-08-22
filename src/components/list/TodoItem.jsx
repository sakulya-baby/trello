import React, { useState } from "react";
import styled from "styled-components";
import { TrelloItem } from "./TrelloItem";
import { useDispatch } from "react-redux";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { GoX } from "react-icons/go";
import { ModalOrig } from "../UI/ModalOrig";
import { addCard } from "../../store/slices/trelloSlice";

export const TodoItem = ({ title, id }) => {
  // const dispatch = useDispatch();

  // const [trelloTitle, setTrelloTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleIcon = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <Container>
        <div>
          {/* <h3 style={{ color: "white" }}>{title}</h3> */}

          <div>
            {openModal && <ModalOrig handleIcon={handleIcon} id={id} />}
            <HiOutlineDotsHorizontal
              style={{ fontSize: "20px" }}
              onClick={handleIcon}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 250px;
  height: fit-content;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    padding-left: 10px;
    padding-bottom: 10px;
    width: 230px;
    height: 60px;
    border-style: hidden;
    outline: none;
    background: white;
    border-radius: 12px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.04);
    overflow-wrap: auto;
    cursor: pointer;

    &::placeholder {
      white-space: pre-wrap;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const StyledIcon = styled(GoX)`
  width: 26px;
  height: 26px;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #bab8b8;
  }
`;
