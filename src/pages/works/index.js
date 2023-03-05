import HeadlinePage from "@components/HeadlinePage";
import PageHead from "@pages/PageHead";
import WorkListDekstop from "@layouts/work/desktop";
import WorklistMobile from "@layouts/work/mobile";
import WorkFilter, { list } from "@layouts/work/filter";
import { useState } from "react";

export default function WorkPage() {
  const [filter, setFilter] = useState(list[0]);

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
