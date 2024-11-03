import { ReactNode } from "react";

type TBorder = {
  children: ReactNode;
  gradintDirection?: string;
  className?: string;
};

const GredentBorder = ({
  children,
  gradintDirection = "bg-gradient-to-t",
  className,
}: TBorder) => {
  return (
    <div className="h-full w-full">
      <div
        className={`p-2 ${gradintDirection} from-primaryColor to-secondaryColor rounded-xl`}
      >
        <div
          className={`${className} h-full w-full rounded-xl flex justify-center items-center`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default GredentBorder;
