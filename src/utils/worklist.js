const workList = [
  {
    year: "2023",
    works: [
      {
        name: "Akarna",
        year: 2023,
        link: "akarna-wedding",
        stacks: "NextJS,Notion,TailwindCSS,Vercel",
        description:
          "Portofolio webapp untuk penyedia jasa makeup dan busana pernikahan",
      },
      {
        name: "Cari Manis",
        year: 2023,
        link: "cari-manis",
        stacks: "NextJS,TailwindCSS,CSS module,Supabase,Vercel",
        description:
          "Produk portofolio pertama dari Underline, yang diharapkan dapat membantu para pengguna yang ingin mengetahui kadar gula pada produk minuman",
      },
      {
        name: "/hi-jojo",
        year: 2023,
        link: "hi-jojo",
        stacks: "NextJS,TailwindCSS,daisyUI,Vercel",
        description:
          "Profile page saya pribadi yang dibangun secara dadakan, tanpa designer.",
      },
    ],
  },
  {
    year: "2022",
    works: [
      {
        name: "ZuPet",
        year: 2022,
        link: "zupet",
        stacks: "ReactJS,Supabase,CSS module",
        description:
          "ZuPet merupakan protipe platform untuk melakukan transaksi perawatan hingga pakan hewan peliharaan. Project ini berjalan secara internal dan sedang menunggu pendanaan untuk tahap berikutnya ;)",
      },
      {
        name: "Meat Supplier Landing Page",
        year: 2022,
        link: "meat-supplier-gpw",
        stacks: "ReactJS,Notion,CSS module,Client-driven",
        description:
          "Klien yang berfokus pada penyedia berbagai jenis daging sapi premium menginginkan untuk menyatukan mini-galeri produk di dalam company profile mereka.",
      },
    ],
  },
  {
    year: "2021",
    works: [
      {
        name: "eCommerce",
        year: 2021,
        link: "e-commerce",
        stacks: "ReactJS,Figma,CSS module",
        isPrivate: true,
        description:
          "Project internal - sebuah web-app eCommerce yang menjual produk perusahaan dan rekanan.",
      },
    ],
  },
  {
    year: "2020",
    works: [
      {
        name: "Quiz Web",
        year: 2020,
        link: "quiz-m",
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
        link: "event-a",
        stacks: "ReactJS,Sass,Zeplin,Avocode",
        isPrivate: true,
      },
      {
        name: "Submission 2019",
        year: 2019,
        link: "submission-2019",
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
        link: "submission-2018",
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
