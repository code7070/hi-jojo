import HeadlinePage from "@components/HeadlinePage";
import PageHead from "@pages/PageHead";
import WorkListDekstop from "@layouts/work/desktop";
import WorklistMobile from "@layouts/work/mobile";
import WorkFilter, { list } from "@layouts/work/filter";
import { useState } from "react";
import { notionConnection } from "@utils/helpers";

export async function getStaticProps() {
  const nowYear = new Date().getFullYear();
  const endYear = 2018;
  const diffYear = nowYear - endYear;
  const arrYear = Array.from(
    { length: diffYear + 1 },
    (_, i) => i + endYear
  ).sort((a, b) => b - a);

  const fetchDB = async (year) => {
    const { results } = await notionConnection.databases.query({
      database_id: "38f9913ed88b4cd7a4c88b3851d4ad03",
      filter: { property: "year", title: { equals: `${year}` } },
    });
    const generateValue = (properties, field, type) => {
      const target = properties[field];
      let value = "";
      if (target) {
        const rich = properties[field].rich_text;
        const hasRich = rich.length > 0 ? rich[0][type] : null;
        value = hasRich;
      }
      return value;
    };

    const data = results?.map((i) => ({
      name: i.properties.Name.title[0].plain_text,
      year: generateValue(i.properties, "year", "plain_text"),
      link: generateValue(i.properties, "link", "plain_text"),
      pageId: generateValue(i.properties, "page", "plain_text"),
      description: i.properties.description,
      type: i.properties.type.select.name,
      raw: i.properties,
    }));
    return data;
  };

  const worklist = await Promise.all(
    arrYear.map(async (year) => ({ year, data: await fetchDB(year) }))
  );

  return { props: { worklist } };
}

export default function WorkPage(props) {
  const [filter, setFilter] = useState(list[0]);

  console.log("Notion: ", props);

  return (
    <>
      <PageHead title="Works" />
      <section className="container">
        <HeadlinePage line1="What i do, called" line2="Works" />
        <WorkFilter filter={filter} setFilter={setFilter} />
        <WorkListDekstop filter={filter} />
        <WorklistMobile filter={filter} />
      </section>
    </>
  );
}
