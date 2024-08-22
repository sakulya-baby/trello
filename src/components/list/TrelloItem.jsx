import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../store/slices/trelloSlice";
import styled from "styled-components";
import { HiArrowsPointingIn } from "react-icons/hi2";
import { ModalOrig } from "../UI/ModalOrig";

export const TrelloItem = ({ title, newTrello, id }) => {
  const [edit, setEdit] = useState(false);
  const [trelloTitle, setTrelloTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  // const handleIcon = () => {
  //   setOpenModal(!openModal);
  // };
  const handleButton = (id) => {
    if (trelloTitle.trim().length > 0) {
      const newItem = {
        cardTitle: trelloTitle,
        id: Date.now().toString(),
      };
      dispatch(addCard({ newItem: newItem, prId: id }));
      setTrelloTitle("");
    }
  };

  return (
    <StyledDiv>
      <section>
        <h1>{title}</h1>

        <div>
          {openModal && <ModalOrig id={id} />}
          <HiArrowsPointingIn
            style={{ fontSize: "20px" }}
            onClick={() => setOpenModal(true)}
          />
        </div>
      </section>

      {newTrello.map((item) => (
        <h2 key={item.id}>{item.cardTitle}</h2>
      ))}

      {edit ? (
        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={trelloTitle}
            onChange={(e) => setTrelloTitle(e.target.value)}
            placeholder="Ввести заголовок для этой карточки "
          />
          <div>
            <button onClick={() => handleButton(id)}>Добавить карточку</button>
          </div>
        </StyledForm>
      ) : (
        <button onClick={() => setEdit(!edit)}>Добавить карточку</button>
      )}
    </StyledDiv>
  );
};

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
    border: 1px solid blue;
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

const StyledDiv = styled.div`
  background-color: white;
  border-radius: 1rem;
  margin: 1rem;

  border: 1px solid black;
  h1 {
    margin: 7px;
  }
  h2 {
    padding: 15px;
    border-radius: 5px;
    border: 1px solid black;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
