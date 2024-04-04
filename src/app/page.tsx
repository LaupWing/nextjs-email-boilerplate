import { TooltipProvider } from "@/components/ui/tooltip"
import Image from "next/image"

export default function Home() {
    return (
        <TooltipProvider delayDuration={0}>
            <div></div>
        </TooltipProvider>
    )
}
