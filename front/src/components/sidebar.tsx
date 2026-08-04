import { SidebarItem } from "./sidebarItems";
import { House } from 'lucide-react';
import logoTicou from "../assets/images/logo-comfundo.png";

export function Sidebar() {
    return(
        <aside className="bg-[#ADB3FF] h-dvh w-[200px]">
            <img src={logoTicou} alt="logo Tikou" className='w-[200px]' />
            <SidebarItem 
                icon={House}
                label="Visão geral"
            />
        </aside>
    )
}