import { Logo } from "@/components/Logo";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export const Header = () => {

  const { setTheme } = useTheme();

  return (
    <div className="flex w-full border-white items-center h-[8vh]">
      <Logo/>
      <Switch
        className="dark:bg-white"
        id="theme-toggle"
        onCheckedChange={(value) => {
          setTheme(value ? "dark" : "light")
        }}/>
    </div>
  )
}