import { ResizablePanelGroup } from "@/components/ui/resizable"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function Home() {
    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                direction="horizontal"
                onLayout={(sizes: number[]) => {
                    document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                        sizes
                    )}`
                }}
                className="h-full max-h-[800px] items-stretch"
            ></ResizablePanelGroup>
        </TooltipProvider>
    )
}
