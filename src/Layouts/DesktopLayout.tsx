import { ReactNode } from "react"
import DesktopNavBar from "../Components/NavBars/DesktopNavBar"

interface Props {
    children: ReactNode;
}

const DesktopLayout = ({children}: Props) => {
  return (
    <div className="grid grid-cols-[316px_minmax(0,1fr)]">
        <DesktopNavBar />
        {children}
    </div>
  )
}

export default DesktopLayout