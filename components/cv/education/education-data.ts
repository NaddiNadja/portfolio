export type Education = {
  title: string;
  years: string;
  description: string;
  school: School;
};

type School = {
  name: string;
  link: string;
};

const education: Education[] = [
  {
    title: "BSc in Software Development",
    years: "2020-2023",
    description: "",
    school: {
      name: "ITU",
      link: "https://en.itu.dk/Programmes/BSc-Programmes/Software-Development",
    },
  },
];

export default education;
