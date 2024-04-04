import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { TooltipProvider } from "@/components/ui/tooltip"
import { useState } from "react"

export default function Home() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const defaultLayout = [265, 440, 655]
    const navCollapsedSize = 4
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
            >
                <ResizablePanel
                    defaultSize={defaultLayout[0]}
                    collapsedSize={navCollapsedSize}
                    collapsible={true}
                    minSize={15}
                    maxSize={20}
                    onCollapse={(collapsed) => {
                        setIsCollapsed(collapsed)
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                            collapsed
                        )}`
                    }}
                    className={cn(
                        isCollapsed &&
                            "min-w-[50px] transition-all duration-300 ease-in-out"
                    )}
                ></ResizablePane>
            </ResizablePanelGroup>
        </TooltipProvider>
    )
}
