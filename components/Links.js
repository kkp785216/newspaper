import React from 'react'
import Link from "next/link";

export const Links = ({to, className, children}) => {
  return (
    <Link href={to}><a className={className ? className : ''}>{children}</a></Link>
  )
}