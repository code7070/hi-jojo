import NotionRenderer from "@components/notion/renderer";
import PageHead from "@pages/PageHead";
import { notionConnection } from "@utils/helpers";
import { NotionAPI } from "notion-client";
import { NotionRenderer as RenderX } from "react-notion-x";

export async function getStaticProps() {
  const target = "5e243cd7e42c40fb84372b064154ba0f";
  const page = await notionConnection.blocks.children.list({
    block_id: target,
  });

  const pagex = await new NotionAPI().getPage(target);

  return {
    props: { page, pagex },
  };
}

export default function StoriesPage(props) {
  console.log("Stories Page: ", props);
  return (
    <>
      <PageHead title="Stories" />
      <section className="container">
        <div className="content-wrapper">
          <NotionRenderer blocks={props?.page?.results} />
          <RenderX recordMap={props?.pagex} />
        </div>
      </section>
    </>
  );
}
