import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import axios from "axios";
import * as S from "./styles";

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
      number: 36,
      text: "Clients",
    },
    {
      id: 3,
      number: 56,
      text: "Awards",
    },
  ];

  return (
    <S.Container>
      {data.map((item) => (
        <div style={{ padding: "10px", fontSize: "24px" }} key={item.id}>
          <CountUp
            start={0}
            end={item.number}
            duration={5}
            suffix={` - ${item.text}`}
          />
        </div>
      ))}
    </S.Container>
  );
};
