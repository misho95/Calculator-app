import { useTheme } from "../utils/global.store";
import Switch from "./switch";

const Header = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex justify-between items-center font-spartan ${
        theme === 1
          ? "text-[#ffffff]"
          : theme === 2
          ? "text-[#36362C]"
          : "text-[#FFE53D]"
      }`}
    >
      <h1 className="text-[32px] font-bold">calc</h1>
      <div className="flex items-end gap-3">
        <h2 className="text-[12px] font-bold">THEME</h2>
        <Switch />
      </div>
    </div>
  );
};

export default Header;
