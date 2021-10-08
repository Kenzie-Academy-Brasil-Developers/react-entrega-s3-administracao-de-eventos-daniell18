import styled from "styled-components";
export const ContainerProduct = styled.div`
  display: flex;

  background-color: black;
  color: white;
  height: 100vw;
  ul {
    padding: 0;
    display: flex;
    width: 95vw;
    background-color: black;
    flex-wrap: wrap;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 10px;
  }
  li {
    background-color: white;
    width: 110px;
    border-radius: 15px;
    padding: 10px;
    height: 245px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
    img {
      width: 80px;
      height: 150px;
    }
    p {
      margin: 0;
      color: black;
    }
    button {
      padding: 10px;
      background-color: lime;
      border: none;
      border-radius: 10px;
      font-family: "sans-serif";
      font-weight: bold;
    }
    button:hover {
      background-color: grey;
    }
  }
`;
export const buttonRmv = styled.div`
  button {
    background-color: black;
  }
`;
