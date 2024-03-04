import { useContext } from "react";
import { useTheme } from "../utils/global.store";
import { GlobalContext } from "./calculator";

const Screen = () => {
  const { theme } = useTheme();

  const globalContext = useContext(GlobalContext);

  if (!globalContext) {
    return;
  }

  return (
    <div
      className={`w-full h-[128px] rounded-[10px] font-bold text-[56px] flex justify-end items-center px-[20px] overflow-hidden ${
        theme === 1
          ? "bg-[#181F33] text-[#FFFFFF]"
          : theme === 2
          ? "bg-[#FFFFFF] text-[#36362C]"
          : "bg-[#1E0936] text-[#FFE53D]"
      }`}
    >
      {globalContext.equal ? globalContext.equal : globalContext.screen}
    </div>
  );
};

export default Screen;
