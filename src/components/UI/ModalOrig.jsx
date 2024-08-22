import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTrello } from "../../store/slices/trelloSlice";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export const ModalOrig = ({id}) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTrello(id));
  };

  return (
    <div>
      <Container>
        <StyledItem>
          <div>
            <h4>Действия со списком</h4>
            <HiOutlineDotsHorizontal />
          </div>
          <section>
            <p>Добавить карточку...</p>
            <p>Копировать список...</p>
            <p onClick={() => handleDelete(id)}>Архивировать список</p>
          </section>
        </StyledItem>
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;
  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
const StyledItem = styled.div`
  position: absolute;
  background-color: #f1f1f1;
  width: 250px;
  height: 220px;
  border-radius: 12px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 20px;
  font-size: 14px;
  cursor: pointer;
  div {
    display: flex;
    gap: 40px;
    padding-top: 30px;
  }
`;
