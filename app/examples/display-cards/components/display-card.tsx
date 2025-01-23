"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

export interface DisplayCardProps {
  className?: string
  icon?: React.ReactNode
  title?: string
  description?: string
  date?: string
  iconClassName?: string
  titleClassName?: string
}

export const DisplayCard = React.forwardRef<HTMLDivElement, DisplayCardProps>(
  (
    {
      className,
      icon = <Sparkles className="size-4 text-blue-300" />,
      title = "Featured",
      description = "Discover amazing content",
      date = "Just now",
      iconClassName = "text-blue-500",
      titleClassName = "text-blue-500",
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-44 w-[26rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-6 py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
          className,
        )}
      >
        <div>
          <span className="relative inline-block rounded-full bg-blue-800 p-1.5">{icon}</span>
          <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
        </div>
        <p className="whitespace-nowrap text-lg">{description}</p>
        <p className="text-muted-foreground">{date}</p>
      </div>
    )
  },
)
DisplayCard.displayName = "DisplayCard"

