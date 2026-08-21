import { SidebarItem } from "./sidebarItems";
import { House } from 'lucide-react';
import logoTicou from "../assets/images/logo.png";

export function Sidebar() {
    return(
        <aside className="flex flex-col items-center bg-[#ADB3FF] h-dvh w-[250px] rounded-r-[15px]">
            <img src={logoTicou} alt="logo Tikou" className='w-[200px] m-8' />
            <SidebarItem 
                icon={House}
                label="Visão geral"
            />
        </aside>
    )
}