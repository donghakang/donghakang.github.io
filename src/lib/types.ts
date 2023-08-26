import React, { Ref } from 'react'

// Component interface
export interface HeaderProps {
  refs: RefsProps[]
}

export interface PageProps {
  propRef: React.RefObject<HTMLElement>
}

// ----
export interface RefsProps {
  section: string
  ref: React.RefObject<HTMLElement> | React.RefObject<HTMLDivElement>
}

// Style
export interface AnimationProps {
  size?: number
  color: string
}
