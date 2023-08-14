import React from "react";
import * as S from "./styles";
import { BiSolidUpArrow } from "react-icons/bi";

const ScrollDown = () => (
  <S.ScrollDown
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <BiSolidUpArrow style={{ transform: "rotate(180deg)" }} size={25} />
    <p>Scroll Down</p>
  </S.ScrollDown>
);

export default ScrollDown;
