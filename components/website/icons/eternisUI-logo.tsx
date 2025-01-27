import * as React from "react"
import type { SVGProps } from "react"

export function EternisLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      aria-label="Eternis Logo"
      className="text-zinc-950 dark:text-white"
      {...props}
    >
      <g transform="translate(50 50) rotate(-35) translate(-50 -50)">
        <rect x="45" y="33" width="61" height="8" rx="10" fill="currentColor" />
        <rect x="30" y="47" width="61" height="8" rx="10" fill="currentColor" />
        <rect x="15" y="63" width="61" height="8" rx="10" fill="currentColor" />
      </g>
    </svg>
  )
}

