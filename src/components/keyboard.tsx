import { useTheme } from "../utils/global.store";
import KeyButton from "./key.button";

const Keyboard = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full h-[480px] rounded-[10px] px-[30px] py-[32px] flex flex-col gap-5 ${
        theme === 1
          ? "bg-[#242D44]"
          : theme === 2
          ? "bg-[#D2CDCD]"
          : "bg-[#1E0936]"
      }`}
    >
      <KeyButton value={7} />
      <KeyButton value={8} />
      <KeyButton value={9} />
      <KeyButton variant="secondary" value={"DEL"} />
      <KeyButton variant="warning" value={"="} width={227} />
    </div>
  );
};

export default Keyboard;
