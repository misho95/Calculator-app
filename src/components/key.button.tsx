import { useTheme } from "../utils/global.store";

type PropsType = {
  variant?: "primary" | "secondary" | "warning";
  width?: number;
  value: number | string;
};

const KeyButton = ({ variant = "primary", value, width }: PropsType) => {
  const { theme } = useTheme();

  return (
    <button
      style={{ width }}
      className={`flex justify-center items-center w-[107px] h-[60px] rounded-[10px] shadow-lift text-[40px] font-bold ${
        variant === "primary"
          ? theme === 1
            ? "bg-[#EAE3DC] active:bg-[#FFFFFE] text-[#434A59] shadow-[#B3A497]"
            : theme === 2
            ? "bg-[#E5E4E1] active:bg-[#FFFFFF] text-[#36362C] shadow-[#A79E91]"
            : "bg-[#331C4D] active:bg-[#6C34AC] text-[#FFE53D] shadow-[#881C9E]"
          : variant === "secondary"
          ? theme === 1
            ? "bg-[#647198] active:bg-[#A2B2E1] text-[#FFFFFF] shadow-[#414E73]"
            : theme === 2
            ? "bg-[#378187] active:bg-[#62B5BC] text-[#FFFFFF] shadow-[#1B6066]"
            : "bg-[#56077C] active:bg-[#8631AF] text-[#FFFFFF] shadow-[#BE15F4]"
          : variant === "warning"
          ? theme === 1
            ? "bg-[#D03F2F] active:bg-[#F96B5B] text-[#FFFFFF] shadow-[#93261A]"
            : theme === 2
            ? "bg-[#C85402] active:bg-[#FF8A38] text-[#FFFFFF] shadow-[#873901]"
            : "bg-[#00DED0] active:bg-[#93FFF8] text-[#1A2327] shadow-[#6CF9F1]"
          : null
      }`}
    >
      {value}
    </button>
  );
};

export default KeyButton;
