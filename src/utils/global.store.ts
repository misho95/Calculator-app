import { create } from "zustand";

type useThemeType = {
  theme: number;
  toggleTheme: () => void;
};

export const useTheme = create<useThemeType>((set) => ({
  theme: 1,
  toggleTheme: () =>
    set((state) => ({ theme: state.theme !== 3 ? state.theme + 1 : 1 })),
}));
