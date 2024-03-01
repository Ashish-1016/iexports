import { type FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="w-full items-baseline gap-1 text-3xl flex justify-start">
      MidPoint <div className="h-[6px] flex items-end w-[6px] rounded-full bg-black dark:bg-white"/>
    </div>
  )
}