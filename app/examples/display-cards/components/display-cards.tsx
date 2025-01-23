"use client"

import * as React from "react"
import { Sparkles } from "lucide-react"
import { DisplayCard, type DisplayCardProps } from "./display-card"

export interface DisplayCardsProps {
  cards?: DisplayCardProps[]
}

export const DisplayCards = React.forwardRef<HTMLDivElement, DisplayCardsProps>(({ cards }, ref) => {
  const defaultCards = [
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Featured",
      description: "Discover amazing content",
      date: "Just now",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Popular",
      description: "Trending this week",
      date: "2 days ago",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "New",
      description: "Latest updates and features",
      date: "Today",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
    },
  ]

  const displayCards = cards || defaultCards

  return (
    <div
      ref={ref}
      className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 -ml-12"
    >
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  )
})
DisplayCards.displayName = "DisplayCards"

