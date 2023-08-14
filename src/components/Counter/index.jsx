import React, { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";
import { Courses, ScrollDown } from "../../components";
import * as S from "./styles";
import { TypeAnimation } from "react-type-animation";

const Counter = () => {
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
      number: 9,
      text: "Courses",
    },
  ];

  return (
    <S.Container>
      <TypeAnimation
        cursor={false}
        sequence={[
          "Hello, I'm Marcelo Bracet",
          1000,
          "There are some things you should know about me",
          1000,
          "I'm 21 years old",
          1000,
          "studying to become a Fullstack Developer",
          1000,
          "I'm from Brazil",
          1000,
          "I live in Rio de Janeiro",
        ]}
        repeat={Infinity}
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          position: "absolute",
        }}
      />
      <S.MainContainer>
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
      </S.MainContainer>
      <Courses />
    </S.Container>
  );
};

export default Counter;
