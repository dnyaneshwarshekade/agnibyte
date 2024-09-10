import { Brand } from "@/types/brand";
import { FC } from "react";

const SingleBrand: FC<{ brand: Brand }> = ({ brand }) => {
  const { Icon, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <div className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100 flex items-center justify-center">
        <Icon size={30} />
      </div>
    </div>
  );
};

export default SingleBrand;
