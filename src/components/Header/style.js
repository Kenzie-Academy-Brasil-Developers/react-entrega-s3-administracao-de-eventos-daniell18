import styled from "styled-components";
export const ContainerHeader = styled.div`
  background-color: red;
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  img {
    width: 80px;

    position: absolute;
    left: 0;
  }

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  input {
    margin-left: 30px;
    width: 40vw;
    border-radius: 10px;
    height: 20px;
  }
  button {
    padding: 5px;
    border-radius: 5px;
    border: none;
    background-color: black;
    color: white;
    font-family: "sans-serif";
    font-weight: bold;
  }
`;
