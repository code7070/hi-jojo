const workList = [
  {
    year: "2023",
    works: [
      {
        name: "Cari Manis",
        year: 2023,
        link: "/cari-manis",
        stacks: "NextJS,TailwindCSS,CSS module,Supabase,Vercel",
      },
      {
        name: "/hi-jojo",
        year: 2023,
        link: "/hi-jojo",
        stacks: "NextJS,TailwindCSS,daisyUI,Vercel",
      },
    ],
  },
  {
    year: "2022",
    works: [
      {
        name: "Zupet",
        year: 2022,
        link: "/zupet",
        stacks: "ReactJS,Notion,CSS module",
      },
      {
        name: "Meat Supplier Landing Page",
        year: 2022,
        link: "/meat-supplier-gpw",
        stacks: "ReactJS,Notion,CSS module",
      },
    ],
  },
  {
    year: "2021",
    works: [
      {
        name: "eCommerce",
        year: 2021,
        link: "/e-commerce",
        stacks: "ReactJS,Figma,CSS module",
        isPrivate: true,
      },
    ],
  },
  {
    year: "2020",
    works: [
      {
        name: "Quiz Web",
        year: 2020,
        link: "/quiz-m",
        stacks: "ReactJS,PUG,Invision,Avocode",
        isPrivate: true,
      },
    ],
  },
  {
    year: "2019",
    works: [
      {
        name: "Event",
        year: 2019,
        link: "/event-a",
        stacks: "ReactJS,Sass,Zeplin,Avocode",
        isPrivate: true,
      },
      {
        name: "Submission 2019",
        year: 2019,
        link: "/submission-2019",
        stacks: "ReactJS,Zeplin,Invision,CSS module",
        isPrivate: true,
      },
    ],
  },
  {
    year: "2018",
    works: [
      {
        name: "Submission 2018",
        year: 2018,
        link: "/submission-2018",
        stacks: "ReactJS,Avocode,Invision,CSS module",
        isPrivate: true,
      },
    ],
  },
];

const rawWorkList = [
  ...workList[0].works,
  ...workList[1].works,
  ...workList[2].works,
  ...workList[3].works,
  ...workList[4].works,
  ...workList[5].works,
];

export { rawWorkList };
export default workList;
