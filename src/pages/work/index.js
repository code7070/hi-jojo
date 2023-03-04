import HeadlinePage from "@components/HeadlinePage";
import PageHead from "@pages/PageHead";
import WorkListDekstop from "@layouts/work/desktop";
import WorklistMobile from "@layouts/work/mobile";
import WorkFilter from "@layouts/work/filter";

export default function WorkPage() {
  return (
    <>
      <PageHead title="Works" />
      <section className="container">
        <HeadlinePage line1="What i do, called" line2="Works" />
        <WorkFilter />
        <WorkListDekstop />
        <WorklistMobile />
      </section>
    </>
  );
}
