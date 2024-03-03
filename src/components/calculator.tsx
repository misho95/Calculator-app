import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const Calculator = ({ children }: PropsType) => {
  return (
    <div className="w-[540px] h-[708px] flex flex-col gap-[20px]">
      {children}
    </div>
  );
};

export default Calculator;
