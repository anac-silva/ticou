import type { LucideIcon } from "lucide-react";

type SidebarItemProps = {
    icon: LucideIcon;
    label: string;
}

export function SidebarItem({ icon: Icon, label }: SidebarItemProps){
    return(
        <div className="flex justify-center hover:bg-[#7C88FF] hover:rounded-lg p-3">
            <Icon className="w-8 h-8"/>
            <span className="ml-4 text-[20px]">{label}</span>
        </div>
    )
}