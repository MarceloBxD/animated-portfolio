import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
  border-radius: 10px;
  gap: 20px;
  padding: 10px;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 20px;
    height: 50px;
    padding: 6px 12px;
    width: fit-content;
  }
`;
