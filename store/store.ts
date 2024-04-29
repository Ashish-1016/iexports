import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type UserTheme = "dark" | "system" | "light";

export type MidPointStore = {
  userTheme?: UserTheme;
  setUserTheme: (newTheme: UserTheme) => void;
};

export const MidPointStore = create<MidPointStore>()(
  devtools(
    persist(
      (set) => ({
        userTheme: "light",
        setUserTheme: (newTheme) => {
          set(() => ({ userTheme: newTheme }));
        },
      }),
      {
        name: "MidPoint-store",
        partialize: (state) => ({ userTheme: state.userTheme }),
      }
    )
  )
);