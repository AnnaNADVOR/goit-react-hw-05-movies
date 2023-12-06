import { PiMaskSadDuotone } from "react-icons/pi";

function Notification({ children }) {
    return (
        <div>
            <PiMaskSadDuotone />
            {children}
        </div>
    )
}

export default  Notification;