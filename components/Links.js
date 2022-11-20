import React from 'react'
import Link from "next/link";

export const Links = ({to, className, children}) => {
  return (
    <Link href={to} className={className ? className : ''}>{children}</Link>
  )
}