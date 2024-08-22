
import styled from "styled-components";


const NotFoundPage = () => {
  return (
    <StyledContainer>
      <section>
        <h1>404</h1>
        <h2>OOPS! PAGE NOT FOUND</h2>
        <p>
          Sorry, the page you're looking for doesn't exist. If you think
          something is broken, report a problem
        </p>
        <div className="container-buttons">
          <button>return home </button>
          <button>report problem</button>
        </div>
      </section>
    </StyledContainer>
  );
};

export default NotFoundPage;
const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  & > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 70%;
    background-color: aliceblue;
    border-radius: 20px;
    gap: 20px;
    & > h1 {
      font-size: 7rem;
      font-weight: bold;
    }
    & > h2 {
      font-size: 4rem;
    }
    & > p {
      font-size: 2rem;
      width: 70%;
      text-align: center;
      font-weight: 700;
    }
    .container-buttons {
      display: flex;
      gap: 30px;
      margin-top: 20px;
      button {
        color: #00ccff;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 19px;
        border-radius: 25px;
        background-color: #fff;
        border: 1px solid #00ccff;
        &:hover {
          background-color: #00ccff;
          color: white;
        }
      }
    }
  }
`;
