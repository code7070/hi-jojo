import HeadlinePage from "@components/HeadlinePage";
import PageHead from "@pages/PageHead";
import WorkListDekstop from "./desktop";
import WorklistMobile from "./mobile";

export default function WorkPage() {
  return (
    <>
      <PageHead title="Works" />
      <section className="container">
        <HeadlinePage line1="What i do, called" line2="Works" />
        <WorkListDekstop />
        <WorklistMobile />
      </section>
    </>
  );
}
