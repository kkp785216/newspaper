import React from 'react'
import Link from "next/link";

export const Links = ({to, className, children}: {to: String, className?: String, children: React.ReactNode}) => {
  return (
    <Link href={to} className={className ? className : ''}>{children}</Link>
  )
}