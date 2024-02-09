import { ReactNode } from "react"

interface Props {
    children: ReactNode;
}

const Form = ({children}: Props) => {
  return (
    <form className="w-1/2">
        {children}
    </form>
  )
}

export default Form