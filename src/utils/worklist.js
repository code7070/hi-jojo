import { arrayGrouping, getNotion, notionConnection } from "./helpers";

const workList = [
  {
    year: "2023",
    works: [
      {
        name: "Akarna",
        year: 2023,
        link: "akarna-wedding-web",
        stacks: "NextJS,Notion,TailwindCSS,Vercel",
        description:
          "Kolaborasi pertama antara Underline dengan salah satu penyedia jasa makeup dan busana pernikahan.",
        colors: "#BF7E1B,#0f0f0f,#a5a5a5",
        type: "web",
        cover: "/works/akarna/cover-akarna.jpg",
      },
      {
        name: "Cari Manis",
        year: 2023,
        link: "cari-manis",
        stacks: "NextJS,TailwindCSS,CSS module,Supabase,Vercel",
        description:
          "Produk portofolio pertama dari Underline, yang diharapkan dapat membantu para pengguna yang ingin mengetahui kadar gula pada produk minuman",
        colors: "#057aff,#cce4ff,#ffd646",
        type: "web",
      },
      {
        name: "/hi-jojo",
        year: 2023,
        link: "hi-jojo",
        stacks: "NextJS,TailwindCSS,daisyUI,Vercel",
        description:
          "Profile page saya pribadi yang dibangun secara dadakan, tanpa designer.",
        colors: "#053f33,#fbbd23,#add4be,#cce4d0",
        type: "web",
      },
    ],
  },
  {
    year: "2022",
    works: [
      {
        name: "Folder Structure",
        year: 2022,
        link: "react-folder-structure",
        stacks: "ReactJS",
        description: "",
        colors: "#ffbe18",
        type: "playground",
      },
      {
        name: "ZuPet",
        year: 2022,
        link: "zupet",
        stacks: "ReactJS,Supabase,CSS module",
        description:
          "Platform untuk melakukan transaksi perawatan hingga pakan hewan peliharaan. Project ini berjalan secara internal dan sedang menunggu pendanaan untuk tahap berikutnya ;)",
        colors: "#ffbe18,#3dabff,#333333",
        type: "web",
      },
      {
        name: "Meat Supplier Landing Page",
        year: 2022,
        link: "meat-supplier-gpw",
        stacks: "ReactJS,Notion,CSS module",
        description:
          "Landing page untuk penyedia daging sapi premium yang menginginkan untuk menyatukan mini-galeri produk di dalam company profile mereka.",
        colors: "#ee1d23,#859d8f,#edd398",
        type: "web",
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
        colors: "#2bbecb,#dbf9fc,#eb008b,#fde6f3",
        type: "web",
      },
    ],
  },
  {
    year: "2020",
    works: [
      {
        name: "Quiz web",
        year: 2020,
        link: "quiz-m",
        stacks: "ReactJS,PUG,Invision,Avocode",
        isPrivate: true,
        colors: "#ea072b,#dbdcdf,#000000",
        type: "web",
      },
    ],
  },
  {
    year: "2019",
    works: [
      {
        name: "ReactJS ❤️ SEO",
        year: 2020,
        link: "reactjs-love-seo",
        stacks: "ReactJS,Screaming Frog,Puppeteer",
        isPrivate: true,
        colors: "#01d8a2,#4dddf6,#72b62b",
        type: "playground",
      },
      {
        name: "web Perf. Consideration",
        year: 2020,
        link: "web-performance",
        stacks: "JavaScript",
        isPrivate: true,
        colors: "#f0db4f,#323330",
        type: "playground",
      },
      {
        name: "Promotional S",
        year: 2019,
        link: "event-a",
        stacks: "ReactJS,Sass,Zeplin,Avocode",
        isPrivate: true,
        colors: "#8de1fd,#e32018,#ffe722,#a2d41c",
        type: "web",
      },
      {
        name: "Submission 2019-1",
        year: 2019,
        link: "submission-2019",
        stacks: "ReactJS,Zeplin,Invision,CSS module",
        isPrivate: true,
        colors: "#ea1521,#eba526,#3765bb",
        type: "web",
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
        colors: "#371446,#50090b,#db2939,#f7f7f7",
      },
    ],
  },
];

export const fetchWork = async () => {
  const { results } = await notionConnection.databases.query({
    database_id: "45767681f6ba4670a21f1dfa0a74ec71",
    sorts: [{ property: "From", direction: "descending" }],
  });

  const data = results?.map((item) => ({
    name: getNotion.dbValues(item.properties.Name),
    from: getNotion.dbValues(item.properties.From),
    to: getNotion.dbValues(item.properties.To),
    as: getNotion.dbValues(item.properties.as),
  }));

  return data;
};

export const fetchFavWorks = async () => {
  const { results } = await notionConnection.databases.query({
    database_id: "38f9913ed88b4cd7a4c88b3851d4ad03",
    filter: {
      property: "favo",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      { property: "year", direction: "descending" },
      { property: "Name", direction: "ascending" },
    ],
  });

  const data = results?.map((i) => ({
    name: getNotion.dbValues(i.properties.Name),
    year: getNotion.dbValues(i.properties.year),
    link: getNotion.dbValues(i.properties.link),
    pageId: getNotion.dbValues(i.properties.page),
    description: getNotion.dbValues(i.properties.description),
    type: getNotion.dbValues(i.properties.type),
    zraw: i,
  }));

  return data;
};

export const fetchWorkList = async () => {
  const { results } = await notionConnection.databases.query({
    database_id: "38f9913ed88b4cd7a4c88b3851d4ad03",
    sorts: [
      { property: "year", direction: "descending" },
      { property: "order", direction: "ascending" },
    ],
  });

  const data = results?.map((i) => ({
    name: getNotion.dbValues(i.properties.Name),
    year: getNotion.dbValues(i.properties.year),
    link: getNotion.dbValues(i.properties.link),
    pageId: getNotion.dbValues(i.properties.page),
    description: getNotion.dbValues(i.properties.description),
    type: getNotion.dbValues(i.properties.type),
    zraw: i,
  }));

  const grouped = arrayGrouping(data, "year", "works");

  return grouped;
};

export default workList;
