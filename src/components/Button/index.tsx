import React, { ReactNode , ButtonHTMLAttributes } from 'react'
import './Button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function Button(props : ButtonProps){
  
  return(
    <button {...props} id="normal" onClick={(event) => {
      event.preventDefault()
    }}>
      {props.children}
    </button>
  )
}