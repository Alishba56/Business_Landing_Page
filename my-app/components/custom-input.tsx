"use client"

import type React from "react"

interface CustomInputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  className?: string
}

export function CustomInput({
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
}: CustomInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none ${className}`}
    />
  )
}

interface CustomTextareaProps {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
  className?: string
  rows?: number
}

export function CustomTextarea({
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  rows = 4,
}: CustomTextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none resize-none ${className}`}
    />
  )
}
