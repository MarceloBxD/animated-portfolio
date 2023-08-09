import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import axios from "axios";
import * as S from "./styles";
import { TypeAnimation } from "react-type-animation";
import { Courses } from "../Courses";
// import { HeroPattern } from "../HeroPattern";
import { motion } from "framer-motion";
import { BiSolidUpArrow } from "react-icons/bi";
export const Counter = () => {
  const [numberOfRepos, setNumberOfRepos] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.github.com/users/MarceloBxD/repos"
      );
      setNumberOfRepos(response.data.length);
    };
    getData();
  }, []);

  const data = [
    {
      id: 1,
      number: numberOfRepos,
      text: "Repos",
    },
    {
      id: 2,
      number: 5,
      text: "Clients",
    },
    {
      id: 3,
      number: 8,
      text: "Courses",
    },
  ];

  return (
    <S.Container>
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BiSolidUpArrow style={{ transform: "rotate(180deg)" }} size={25} />
        <p>Scroll Down</p>
      </motion.div>
      <TypeAnimation
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px" }}
        cursor={false}
        repeat={Infinity}
        sequence={[
          "I'm a Front-end Developer",
          2000,
          "I'm a Back-end Developer",
          2000,
          "I'm studying to become a Fullstack Developer",
          2000,
        ]}
      />

      {data.map((item) => (
        <S.CardContainer
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ delay: item.id * 0.5, type: "spring", stiffness: 50 }}
          key={item.id}
        >
          <CountUp
            start={0}
            end={item.number}
            duration={9}
            suffix={` - ${item.text}`}
          />
        </S.CardContainer>
      ))}
      <Courses />
    </S.Container>
  );
};
