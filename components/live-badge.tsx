import { cn } from "@/lib/utils";
import { Divide } from "lucide-react";

interface LiveBadgeProps{
    classname?:string
}

export const LiveBadge=({classname}:LiveBadgeProps)=>{

    return(
        <div className={cn(
            classname,
            "bg-rose-500 text-center p-0.5 px-1.5 rounded-md uppercase tet-[10px] border border-background font-semibold"
            )}>Live</div>
    )
}