import HeadlinePage from "@components/HeadlinePage";
import PageHead from "@pages/PageHead";
import WorkListDekstop from "@layouts/work/desktop";
import WorklistMobile from "@layouts/work/mobile";
import WorkFilter, { list } from "@layouts/work/filter";
import { useState } from "react";
import { arrayGrouping, getNotion, notionConnection } from "@utils/helpers";

export async function getStaticProps() {
  const generateValue = getNotion.dbValues;

  const fetchDB = async () => {
    const { results } = await notionConnection.databases.query({
      database_id: "38f9913ed88b4cd7a4c88b3851d4ad03",
      sorts: [
        { property: "year", direction: "descending" },
        { property: "order", direction: "ascending" },
      ],
    });

    const data = results?.map((i) => ({
      name: generateValue(i.properties.Name),
      year: generateValue(i.properties.year),
      link: generateValue(i.properties.link),
      pageId: generateValue(i.properties.page),
      description: generateValue(i.properties.description),
      type: generateValue(i.properties.type),
      zraw: i,
    }));
    return data;
  };

  const workdata = await fetchDB();
  const worklist = arrayGrouping(workdata, "year", "works");

  return { props: { worklist } };
}

export default function WorkPage({ worklist = [] }) {
  const [filter, setFilter] = useState(list[0]);

  return (
    <>
      <PageHead title="Works" />
      <section className="container">
        <HeadlinePage line1="What i do, called" line2="Works" />
        <WorkFilter filter={filter} setFilter={setFilter} />
        <WorkListDekstop worklist={worklist} filter={filter} />
        <WorklistMobile worklist={worklist} filter={filter} />
      </section>
    </>
  );
}
