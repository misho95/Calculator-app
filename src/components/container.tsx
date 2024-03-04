import { ReactNode } from "react";
import { useTheme } from "../utils/global.store";

type PropsType = {
  children: ReactNode;
};

const Container = ({ children }: PropsType) => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex min-h-screen justify-center items-center font-spartan select-none pt-[15px] sm:pt-0 ${
        theme === 1
          ? "bg-[#3A4663]"
          : theme === 2
          ? "bg-[#E6E6E6]"
          : "bg-[#17062A]"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
