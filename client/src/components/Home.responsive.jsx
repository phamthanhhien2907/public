import TabsVerticel from "./TabsVerticel"
import header_gif from "../assets/header_gif.gif"
import logo_meovang from "@/assets/logo-meovang.webp"

const HomePage = () => {
  return (
    <div className="w-full">
        <div className="bg-black fixed top-0 z-50 h-[60px] flex items-center px-4 gap-4 overflow-hidden w-full">
            <img src={logo_meovang} className="h-[45px]" alt="header_gif" />
             <div className="flex w-full items-end gap-4 justify-end">
                <button className="w-[120px] h-[35px] bg-yellow-500 text-white font-semibold rounded-sm text-[10px]">Tải app</button>
             </div>
        </div>
        <TabsVerticel/>
    </div>
  )
}

export default HomePage