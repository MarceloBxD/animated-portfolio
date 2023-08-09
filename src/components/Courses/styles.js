import styled from "styled-components";
import { motion } from "framer-motion";

export const CourseContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);

  @media screen and (max-width: 768px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 80px;
  height: 80px;
  padding: 3px;
  border-radius: 50%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  color: #000;

  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
`;
