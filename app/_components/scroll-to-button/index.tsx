'use client'

import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ScrollToButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  targetId: string
  children: ReactNode
}

export function ScrollToButton({ targetId, children, ...props }: ScrollToButtonProps) {
  return (
    <button
      {...props}
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
    >
      {children}
    </button>
  )
}
