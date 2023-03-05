export type Job = {
  title: string;
  years: string;
  description: string;
};

export type Company = {
  name: string;
  link: string;
  jobs: Job[];
  volunteer?: boolean;
};

const experiences: Company[] = [
  {
    name: "ITU",
    link: "https://itu.dk/",
    jobs: [
      {
        title: "Head Tutor",
        years: "2023-Present",
        description: `Project management of the study start for bachelor 
          students at ITU, including recruitment of tutors, planning and 
          facilitation of the study start.`,
      },
      {
        title: "Teaching Assistant",
        years: "2021-Present",
        description: `TA in Algorithms and Data Structures, First Year 
          Project, Distributed Systems, Foundations of Computing – Discrete 
          Mathematics and StudyLab.`,
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
        description: `Fullstack development of a web application, as the sole 
          developer in the startup Cyberjuice. Frameworks used: NextJS, GraphQL, 
          .NET EF Core, AWS, Postgres.`,
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
        description: `Volunteer barista at the student café at ITU for a single 
          semester.`,
      },
    ],
    volunteer: true,
  },
  {
    name: "Clio",
    link: "https://dk.clio.me/",
    jobs: [
      {
        title: "Portfolio Management Coordinator",
        years: "2020",
        description: `Student assistant in the Product Owner team. Facilitation of 
          prioritization meetings, project management, and communication between 
          the IT- and editorial department.`,
      },
      {
        title: "Platform Specialist",
        years: "2018-2020",
        description: `Project management of different projects in Clio, and personal 
          link between the IT- and editorial department.`,
      },
      {
        title: "Team Lead for Team Upload",
        years: "2017-2018",
        description: `Personal management of a small team of 3-4 people, including 
          project management for the team.`,
      },
      {
        title: "Uploader",
        years: "2016",
        description: `Upload of content to the Clio platform, including metadata, 
          images, validation of layout etc. Additionally, creation of digital media 
          for the platform, such as graphs, pdf-files, simple images.`,
      },
      {
        title: "Data Validation Specialist",
        years: "2015",
        description: `Manual validation of data that had been imported into a new 
          subscription management system. This was a six month project employment,
          which was cut two months short due to the project ending earlier than 
          expected. I was then offered a permanent position in another department.`,
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
        description: ``,
      },
    ],
  },
  {
    name: "Roskilde festival",
    link: "https://roskilde-festival.dk/",
    jobs: [
      {
        title: "Busbus food truck",
        years: "2014",
        description: `Volunteer at the food truck "Busbus" at Roskilde 
          festival, where I served food to the festival guests.`,
      },
      {
        title: "Brazil food stand",
        years: "2013",
        description: `Volunteer at the food stand "Brazil" at Roskilde 
          festival, where I served and made food to the festival guests, and
          cleaned the kitchen.`,
      },
    ],
    volunteer: true,
  },
];

export default experiences;
