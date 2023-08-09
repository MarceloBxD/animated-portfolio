import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { BiSolidUpArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import { Counter } from "../../components/Counter";

export const Projects = () => {
  return (
    <S.Container>
      <Counter />
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: "fixed",
          bottom: "10px",
          left: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: "translate(-50%)",
        }}
      >
        <BiSolidUpArrow style={{ transform: "rotate(180deg)" }} size={25} />
        <p>Scroll Down</p>
      </motion.div>
    </S.Container>
  );
};
