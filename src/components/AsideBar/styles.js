import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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
