import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 15px;
    text-align: center;
  }
  /* height: 100%; */
  /* background: url("https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbWFkb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"); */
`;

export const CardContainer = styled(motion.div)`
  padding: 10px 12px;
  text-align: center;
  font-size: 24px;
  background-color: #fff;
  cursor: default;
  color: #000;
  margin: 10px 0;
  width: 200px;
  box-shadow: 10px 10px 10px 0px black;
  border-radius: 3px;
`;
