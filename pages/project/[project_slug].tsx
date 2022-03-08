import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div className="mt-4">
      <h1></h1>
    </div>
  );
};

// export const getStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({
//   params: { projectId },
// }: {
//   params: { projectId: number };
// }) => {
//   console.log("projectId", projectId);
//   return;
// };

export default ProjectPage;
