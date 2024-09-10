import { Technology } from "@/types/technology";
import technologiesData from "./technologiesData";

const Technologies = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-4 py-8 dark:bg-gray-dark sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
              {technologiesData.map((tech) => (
                <SingleTechnology key={tech.id} technology={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

const SingleTechnology = ({ technology }: { technology: Technology }) => {
  const { href, icon: Icon, name } = technology;

  return (
    <div className="flex items-center justify-center px-3 py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="flex items-center opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Icon className="text-2xl mr-2" />
        <span className="text-base sm:text-lg font-medium">{name}</span>
      </a>
    </div>
  );
};
