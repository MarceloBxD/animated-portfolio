import React from "react";
import * as S from "./styles";
import { MainProjects } from "../../components";

const Courses = () => {
  const data = [
    {
      id: 1,
      name: "B7web",
      teacher: "Bonieky Lacerda",
      img: "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/83111/logo.png",
      href: "https://b7web.com.br/",
    },
    {
      id: 2,
      name: "Danki Code",
      teacher: "Guilherme Grillo",
      href: "https://cursos.dankicode.com/",
      img: "data:image/png;base64,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",
    },
    {
      id: 3,
      name: "Python do Zero ao Avançado",
      teacher: "Luiz Otávio Miranda",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
      href: "https://www.udemy.com/course/python-3-do-zero-ao-avancado/",
    },
  ];

  return (
    <div>
      <MainProjects />
      <S.CourseContainer>
        {data.map((course) => (
          <S.CardContainer
            animate={{ scale: 0.8 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={course.id}
          >
            <S.Image src={course.img} />
          </S.CardContainer>
        ))}
      </S.CourseContainer>
    </div>
  );
};

export default Courses;
