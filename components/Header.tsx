import { Logo } from "@/components/Logo";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MidPointStore } from "@/store/store";

export const Header = () => {

  const currentTheme = MidPointStore(store => store.userTheme);
  const setCurrentTheme = MidPointStore(store => store.setUserTheme);

  return (
    <div className="flex w-full h-[8vh]">
      <Logo/>
      <Switch
        id="theme-toggle"
        onCheckedChange={(value) => {
          console.log("value -->", value)
          setCurrentTheme(value ? "dark" : "light")
        }}/>
      <Label htmlFor="theme-toggle">
        {currentTheme === "light" ? "light" : "dark"}
      </Label>
    </div>
  )
}