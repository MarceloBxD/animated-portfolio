import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { BiSolidUpArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import { Counter } from "../../components/Counter";

export const Projects = () => {
  return (
    <S.Container>
      <Counter />
    </S.Container>
  );
};
