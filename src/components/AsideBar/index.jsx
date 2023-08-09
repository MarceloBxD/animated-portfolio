import React, { useEffect, useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { VscProject } from "react-icons/vsc";
import { BsFillFileCodeFill } from "react-icons/bs";
import { LuZap } from "react-icons/lu";
import { Link } from "react-router-dom";

import * as S from "./styles";

import file from "../../assets/CV.pdf";

export const AsideBar = () => {
  const asideData = [
    {
      id: 1,
      title: "Home",
      path: "/",
      icon: <BiHomeAlt2 />,
      isChoosed: true,
    },
    {
      id: 2,
      title: "Projects",
      path: "/projects",
      icon: <VscProject />,
      isChoosed: false,
    },
    {
      id: 3,
      title: "Curriculum",
      path: file,
      icon: <BsFillFileCodeFill />,
      isChoosed: false,
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(asideData[0].id);

  var newAsideData = undefined;
  useEffect(() => {
    newAsideData = asideData.map((item) => {
      if (item.id === selectedIndex) {
        return { ...item, isChoosed: true };
      }
      return { ...item, isChoosed: false };
    });
  }, [selectedIndex]);

  return (
    <S.Container>
      {asideData.map((item) => (
        <a key={item.id} style={{ color: "#fff" }} href={item.path}>
          <div
            onClick={() => setSelectedIndex(item.id)}
            style={{
              backgroundColor:
                selectedIndex === item.id ? "#000" : "transparent",
              borderRadius: "50%",
              height: "50px",
              width: "50px",
              cursor: "Pointer",
              transition: "all 0.5s ease",
              display: "flex",
              justifyContent: " center",
              alignItems: "center",
              boxShadow: "0 0 10px #000",
            }}
            key={item.id}
          >
            {item.icon}
          </div>
        </a>
      ))}
    </S.Container>
  );
};
