import HeadlinePage from "@components/HeadlinePage";
import PageHead from "@pages/PageHead";
import WorkListDekstop from "@layouts/work/desktop";
import WorklistMobile from "@layouts/work/mobile";
import WorkFilter, { list } from "@layouts/work/filter";
import { useState } from "react";

import { fetchWorkList } from "@utils/worklist";

export async function getStaticProps() {
  return {
    props: { worklist: await fetchWorkList() },
    revalidate: 60,
  };
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
