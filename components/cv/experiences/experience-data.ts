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
          "Project management of the study start for bachelor students at ITU, including recruitment of tutors, planning and facilitation of the study start.",
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
        description:
          "Fullstack development of a web application, as the sole developer in the startup Cyberjuice.",
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
        description: "Volunteer barista at the student café at ITU.",
      },
    ],
  },
  {
    name: "Clio",
    link: "https://dk.clio.me/",
    jobs: [
      {
        title: "Portfolio Management Coordinator",
        years: "2020",
        description: "Student assistant in the Product Owner team.",
      },
      {
        title: "Platform specialist",
        years: "2018-2020",
        description:
          "Project management of differing projects in Clio, and link between the IT- and editorial department.",
      },
      {
        title: "Team lead for team Upload",
        years: "2017-2018",
        description:
          "Personal management of a small team of 3-4 people, including project management for the team.",
      },
      {
        title: "Uploader",
        years: "2016",
        description:
          "Upload of content to the Clio platform, including metadata, images, validation of layout etc. Additionally, creation of digital media for the platform, such as graphs, pdf-files, simple images.",
      },
      {
        title: "Data validation specialist",
        years: "2015",
        description:
          "Manual validation of data that had been imported into a new subscription management system.",
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
