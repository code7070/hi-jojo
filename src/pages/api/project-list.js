export default function getProjectList(req, res) {
  const projectList = [
    { name: "Event", year: 2018, link: "/project/event-a" },
    { name: "Submission Web", year: 2019, link: "/project/submission-a" },
    { name: "Quiz Web", year: 2020, link: "/project/quiz-m" },
  ];

  return res.status(200).json({ data: projectList });
}
