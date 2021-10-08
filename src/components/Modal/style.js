import styled from "styled-components";
export const ContainerModal = styled.div`
  width: 100vw;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(0, 0, 0, 0.8);
`;
export const ContentModal = styled.div`
  width: 80%;
  max-width: 550px;

  border-radius: 15px;
  background-color: white;

  img {
    width: 50px;
  }
  h4 {
    margin: 0;
  }
  h5 {
    margin: 0;
  }
  p {
    font-weight: bold;
    font-size: 7px;
    color: black;
    font-family: "sans-serif";
  }
`;
export const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const CardContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: black;
  max-width: 550px;

  div {
    font-size: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-end;
    padding: 5px;
    label {
      font-weight: bold;
      font-size: 15px;
    }
    input {
      background-color: lime;
      border: none;
      padding: 10px;
      border-radius: 10px;
    }
    input:hover {
      background-color: red;
    }
  }
`;
