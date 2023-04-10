import { ProjectData } from "@/projectData";
import Link from "next/link";

const project = ({ project }) => {
  return (
    <div>
      <img src={project.img} />
      <p>{project.language}</p>
      <Link
        className="bg-cyan-500 mx-auto rounded-lg p-2 mt-10 "
        href="/portfolio"
      >
        Revenir à la liste des projets
      </Link>
    </div>
  );
};

export default project;

export const getStaticProps = (context) => {
  const filtered = ProjectData.filter(
    (project) => project.id == context.params.id
  );
  if (filtered.length > 0) {
    return {
      props: {
        project: filtered[0],
      },
    };
  }
};

export const getStaticPaths = () => {
  const ids = ProjectData.map((project) => project.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
