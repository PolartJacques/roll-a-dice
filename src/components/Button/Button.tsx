import { FunctionComponent, MouseEventHandler, ReactNode } from "react"
import "./Button.css"

interface ButtonPros {
  onClick?: MouseEventHandler<HTMLButtonElement>
  marginTop?: string
  children?: ReactNode
}

const Button: FunctionComponent<ButtonPros> = ({onClick, marginTop="", children}) => {
  const style = {
    marginTop
  }

  return (
    <button className="button" style={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button