import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GoXCircle } from "react-icons/go";
import { Button } from "@mui/material";
import { TrelloItem } from "./TrelloItem";
import { addValue } from "../../store/slices/trelloSlice";

export const TodoForm = () => {
  const [value, setValue] = useState("");
  const [state, setState] = useState(false);

  const { trello } = useSelector((store) => store.trello);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const addTrello = () => {
    const newValue = {
      title: value,
      id: Date.now(),
      newTrello: [],
    };

    dispatch(addValue(newValue));
    setValue("");
    setState(false);
  };

  return (
    <>
      <StyledWrapper>
        <StyledItem>

     

          {trello.map((item) => (
            <TrelloItem key={item.id} {...item} />
          ))}
        </StyledItem>

        {state ? (
          <Container>
            <StyledForm onSubmit={handleSubmit}>
              <input
                value={value}
                onChange={handleChange}
                type="text"
                placeholder="Ввести заголовок списка"
              />
              <div>
                <Button type="submit" onClick={addTrello}>
                  Добавить список
                </Button>
                <StyledGoX onClick={() => setState(false)} />
              </div>
            </StyledForm>
          </Container>
        ) : (
          <>
            <Button type="submit" onClick={() => setState(!state)}>
              {trello.length === 0
                ? "+ Добавить список"
                : "+Добавить еще одну колонку"}
            </Button>
          </>
        )}
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;
const Container = styled.div`
  width: 250px;
  height: 90px;
  background-color: white;
  border-radius: 10px;
`;
const StyledForm = styled.form`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    padding: 10px;
    width: 220px;
    height: 30px;
    border-radius: 4px;
    border-style: hidden;
    outline-color: #5757ef;
    cursor: pointer;

    &:hover {
      border: 1.5px solid rgba(154, 154, 154, 0.8);
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

const StyledItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const StyledGoX = styled(GoXCircle)`
  width: 26px;
  height: 26px;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #bab8b8;
  }
`;
