import { type FC } from "react";
import { Button } from "@/components/ui/button";

export const  HeroSection: FC = ()  => {
  return (
    <div className=" max-md:h-[20%] p-[3em] h-[60%] flex flex-col justify-start gap-[5%] w-[40%]">
      <text className="text-5xl font-bold whitespace-nowrap">
        Meet at your
        <br/>
        MidPoint now?
      </text>
      <br/>
      <text className="font-light whitespace-nowrap text-lg">
        Find the perfect place between
        <br/>
        your points.
      </text>
      <div className="flex w-full justify-start gap-3">
        <Button>Signup</Button>
        <Button variant="outline" >Login</Button>
      </div>
    </div>
  )

}