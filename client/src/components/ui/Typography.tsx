import { typography } from '@/data/typography'
import React from 'react'

type TypographyProps = {
    size: string,
    weight: string,
    children: React.ReactNode;
}

const Typography:React.FC<TypographyProps> = ({size = typography.fontSize.sm, weight = typography.weight.normal, children}) => {
  return (
    <div className={`${size + " " + weight}`}>
        {children}
    </div>
  )
}

export default Typography