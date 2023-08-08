import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  box-shadow: 10px 10px 2px purple;
  left: 20px;
  top: 20px;
  animation: DownToUp 2s ease-in-out infinite;

  @keyframes DownToUp {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
