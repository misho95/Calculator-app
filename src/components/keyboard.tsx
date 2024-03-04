import { useTheme } from "../utils/global.store";
import KeyButton from "./key.button";

const Keyboard = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full h-[480px] rounded-[10px] px-[30px] grid grid-rows-4 py-[32px]  ${
        theme === 1
          ? "bg-[#242D44]"
          : theme === 2
          ? "bg-[#D2CDCD]"
          : "bg-[#1E0936]"
      }`}
    >
      <div className="grid grid-cols-4 gap-[12px]">
        <KeyButton value={7} />
        <KeyButton value={8} />
        <KeyButton value={9} />
        <KeyButton variant="secondary" value={"DEL"} />
      </div>
      <div className="grid grid-cols-4 gap-[12px]">
        <KeyButton value={4} />
        <KeyButton value={5} />
        <KeyButton value={6} />
        <KeyButton value={"+"} />
      </div>
      <div className="grid grid-cols-4 gap-[12px]">
        <KeyButton value={1} />
        <KeyButton value={2} />
        <KeyButton value={3} />
        <KeyButton value={"-"} />
      </div>
      <div className="grid grid-cols-4 gap-[12px]">
        <KeyButton value={"."} />
        <KeyButton value={0} />
        <KeyButton value={"/"} />
        <KeyButton value={"x"} />
      </div>
      <div className="grid grid-cols-2 gap-[12px]">
        <KeyButton
          variant="secondary"
          value={"RESET"}
          width={{ small: 133, big: 227 }}
        />
        <KeyButton
          variant="warning"
          value={"="}
          width={{ small: 133, big: 227 }}
        />
      </div>
    </div>
  );
};

export default Keyboard;
