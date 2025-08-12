"use client"

import type { ReactNode } from "react"

interface CustomCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function CustomCard({ children, className = "", hover = true }: CustomCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-100 ${hover ? "hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" : ""} ${className}`}
    >
      {children}
    </div>
  )
}

export function CustomCardHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 pb-4 ${className}`}>{children}</div>
}

export function CustomCardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 pt-2 ${className}`}>{children}</div>
}
