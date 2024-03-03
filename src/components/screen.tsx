import { useTheme } from "../utils/global.store";

const Screen = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`w-full h-[128px] rounded-[10px] font-bold text-[56px] flex justify-end items-center px-[20px] ${
        theme === 1
          ? "bg-[#181F33] text-[#FFFFFF]"
          : theme === 2
          ? "bg-[#FFFFFF] text-[#36362C]"
          : "bg-[#1E0936] text-[#FFE53D]"
      }`}
    >
      399,981
    </div>
  );
};

export default Screen;
