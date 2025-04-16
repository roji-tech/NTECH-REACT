import styled from "styled-components";

export const RegisterWrapper = styled("div")`
  max-width: 100vw;
  width: 100%;

  min-height: 100dvh;
  background: aliceblue;
  border: 2px solid yellow;

  display: grid;
  place-items: center;

  & form {
    background: palegoldenrod;

    min-height: 500px;
    width: min(400px, 90%);
    /* max-width: 400px; */

    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    border-radius: 5px;

    div.field {
      display: flex;
      flex-direction: column;
      padding: 20px;
      gap: 10px;

      label {
      }

      & input {
        padding: 10px;
        border-radius: 10px;
        outline: none;
      }
    }

    button {
      background: lightblue;
      width: min(70%, 300px);
      margin: auto;
      cursor: pointer;
      padding: 20px;
      border-radius: 20px;
    }
  }
`;
