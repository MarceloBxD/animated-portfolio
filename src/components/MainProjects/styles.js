import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  margin: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 5px 2px 3px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
export const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #fff;
`;
export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ButtonLeft = styled.button`
  width: 40px;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #000000;
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  left: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ebff00;
    color: #000000;
  }
`;
