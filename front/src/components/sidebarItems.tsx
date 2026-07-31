

type SidebarItemProps = {
    icon: LucideIcon;
    label: string;
}

export function SidebarItem({ icon, label }: SidebarItemProps){
    return(
        <div>
            {icon}
            <span>{label}</span>
        </div>
    )
}