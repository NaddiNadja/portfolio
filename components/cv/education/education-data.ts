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
    description: `Currently doing my bachelor's degree. I'm on my sixth semester, 
      and will graduate in 2023.`,
    school: {
      name: "ITU",
      link: "https://en.itu.dk/Programmes/BSc-Programmes/Software-Development",
    },
  },
  {
    title: "High school",
    years: "2012-2015",
    description: `High school in Copenhagen with a specialisation in mathematics 
      and physics. Rysensteen Gymnasium has a Global Citizenship Programme which
      focuses on giving the students a global perspective in their education.`,
    school: {
      name: "Rysensteen Gymnaium",
      link: "https://rysensteen.dk/",
    },
  },
  {
    title: "10th grade",
    years: "2011-2012",
    description: `One year at a creative boarding school (efterskole) on Langeland,
      where I had theatre as my main subject.`,
    school: {
      name: "Langelands Efterskole",
      link: "https://leskole.dk/",
    },
  },
];

export default education;
