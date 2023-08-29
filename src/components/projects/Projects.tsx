import { type FC } from "react";
import GridLayout from "~/components/layouts/GridLayout/GridLayout";

const Projects: FC = () => {
  return (
    <GridLayout minWith="175px">
      <button className="bg-primary-dark-light duration-250 group w-full max-w-sm rounded-md p-3 text-left transition-all ease-in-out hover:cursor-pointer hover:bg-primary-accent hover:text-primary-dark">
        <h2 className="mb-4 text-lg group-hover:text-primary-dark">Wupzy</h2>
        <p className="text-sm text-primary-light/70 group-hover:text-primary-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quod voluptates voluptatem quos
          voluptatibus quas doloribus quidem fugit? Quisquam voluptatum,
        </p>
      </button>
    </GridLayout>
  );
};

export default Projects;
