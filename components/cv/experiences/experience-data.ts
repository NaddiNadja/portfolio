export type Experience = {
  title: string;
  years: string;
  description: string;
};

export type Company = {
  name: string;
  link: string;
  jobs: Experience[];
};

const experiences: Company[] = [
  {
    name: "ITU",
    link: "https://itu.dk/",
    jobs: [
      {
        title: "Head tutor",
        years: "2023-Present",
        description:
          "TA in Algorithms and Data Structures, First Year Project, Distributed Systems, Foundations of Computing - Discrete Mathematics and StudyLab.",
      },
      {
        title: "Teaching Assistant",
        years: "2021-Present",
        description:
          "TA in Algorithms and Data Structures, First Year Project, Distributed Systems, Foundations of Computing - Discrete Mathematics and StudyLab.",
      },
    ],
  },
  {
    name: "Cyberjuice",
    link: "https://www.linkedin.com/company/cyberjuice/",
    jobs: [
      {
        title: "Student Software Developer",
        years: "2022-2023",
        description: "",
      },
    ],
  },
  {
    name: "Café Analog",
    link: "https://cafeanalog.dk/",
    jobs: [
      {
        title: "Barista",
        years: "2020-2021",
        description: "Volunteer barista at the student café at ITU.clio",
      },
    ],
  },
  {
    name: "Clio",
    link: "https://dk.clio.me/",
    jobs: [
      {
        title: "Different positions",
        years: "2015-2020",
        description:
          "Including web editor, team lead, platform specialist and project manager.",
      },
    ],
  },
  {
    name: "Langelands Efterskole",
    link: "https://leskole.dk/",
    jobs: [
      {
        title: "Board Member",
        years: "2017-2021",
        description: "",
      },
    ],
  },
];

export default experiences;
