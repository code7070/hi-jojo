import ProjectPlayground from "@layouts/project/playground";
import PageHead from "src/pages/PageHead";
import EventWeb from "./web";

export default function ProjectEventA() {
  return (
    <>
      <PageHead title="Event Webapp" />
      <ProjectPlayground
        title="Event & Journey Submission webapp"
        description={
          <>
            This project are made for brand event information and mini
            submission journey. Developed in 2018.
          </>
        }
        techStacks={["ReactJS", "CSS", "CSS Animation", "Slider"]}
        status="private"
      >
        <EventWeb />
      </ProjectPlayground>
    </>
  );
}
