import { useTheme } from "../utils/global.store";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-[71px] h-[44px]">
      <div className={`flex justify-between px-[10px] text-[12px] font-bold`}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div
        onClick={() => toggleTheme()}
        className={`w-[71px] h-[26px] rounded-[13px] relative ${
          theme === 1
            ? "bg-[#242D44]"
            : theme === 2
            ? "bg-[#D2CDCD]"
            : "bg-[#1E0936]"
        }`}
      >
        <div
          className={`size-[16px] rounded-full top-1/2 -translate-y-1/2 absolute duration-200 ${
            theme === 1
              ? "bg-[#D03F2F] left-[5px]"
              : theme === 2
              ? "bg-[#C85402] left-[28px]"
              : "bg-[#00DED0] left-[50px]"
          }`}
        />
      </div>
    </div>
  );
};

export default Switch;
