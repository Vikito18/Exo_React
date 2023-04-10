import { path } from "@/config";
import { ProjectData } from "@/projectData";
import Image from "next/image";
import Link from "next/link";

const project = ({ project }) => {
  return (
    <div className="flex flex-col items-center mx-auto">
      <h2 className="text-4xl font-extrabold m-5">{project.title}</h2>
      <Image
        className=" mx-auto border-2 border-pink-600 shadow-xl shadow-black"
        src={path + project.img}
        alt={"image du projet: " + project.title}
        width={600}
        height={600}
      />
      <p className="m-5 text-xl">
        Langages utilisés : <strong>{project.language}</strong>
      </p>
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
