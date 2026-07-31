import type { LucideIcon } from "lucide-react";

type SidebarItemProps = {
    icon: LucideIcon;
    label: string;
}

export function SidebarItem({ icon: Icon, label }: SidebarItemProps){
    return(
        <div className="flex justify-center">
            <Icon className="my-3"/>
            <span className="my-3 mx-2">{label}</span>
        </div>
    )
}